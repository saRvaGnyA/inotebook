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
