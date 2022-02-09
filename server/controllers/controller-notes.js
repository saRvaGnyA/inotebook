// schema imports
const Note = require("../models/Note");

module.exports.fetchAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some internal server error occured",
    });
  }
};

module.exports.addNote = async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const note = new Note({ title, description, tag, user: req.user.id });
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some internal server error occured",
    });
  }
};

module.exports.updateNote = async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    //Create a new note object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);

    // if note doesn't exist
    if (!note) {
      return res.status(404).send("Resource not found");
    }

    // check the user
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not authorized");
    }

    // note exists, user is valid
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some internal server error occured",
    });
  }
};
