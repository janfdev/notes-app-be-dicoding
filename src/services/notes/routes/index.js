import express from "express";
import {
  createNote,
  getNotes,
  getNoteById,
  editNoteById,
  deleteNoteById,
} from "../controller/note-controller.js";
import validate from "../../../middlewares/validate.js";
import {
  notePayloadSchema,
  noteQuerySchema,
  noteUpdatePayloadSchema,
} from "../validator/schema.js";
const router = express.Router();

router.post("/notes", validate(notePayloadSchema), createNote);
router.get("/notes", validate(noteQuerySchema, "query"), getNotes);
router.get("/notes/:id", getNoteById);
router.put("/notes/:id", validate(noteUpdatePayloadSchema), editNoteById);
router.delete("/notes/:id", deleteNoteById);

export default router;
