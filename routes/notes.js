const express = require("express");

const router = express.Router();

// middleware imports
const {
  fetchUser,
  validate,
  noteCreationValidationRules,
} = require("./../middleware/validator");

// controller imports
const {
  fetchAllNotes,
  addNote,
  updateNote,
  deleteNote,
} = require("./../controllers/controller-notes");

// Route 1: Get all the notes using: GET "/api/notes/fetchallnotes". Login required
router.get("/fetchallnotes", fetchUser, fetchAllNotes);

// Route 2: Add a new note using: POST "/api/notes/addnote". Login required
router.post(
  "/addnote",
  fetchUser,
  noteCreationValidationRules(),
  validate,
  addNote
);

// Route 3: Update an existing note using: PATCH "/api/notes/updatenote". Login required
router.patch("/updatenote/:id", fetchUser, updateNote);

// Route 4: Delete an existing note using: DELETE "/api/notes/updatenote". Login required
router.delete("/deletenote/:id", fetchUser, deleteNote);

module.exports = router;
