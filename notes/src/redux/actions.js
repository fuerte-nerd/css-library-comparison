import {
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  TOGGLE_VIEWER,
  LOAD_NOTE,
  LOAD_NOTES,
} from "./types";

export const loadNotes = (notes) => ({
  type: LOAD_NOTES,
  payload: notes,
});

export const addNote = (noteData) => ({
  type: ADD_NOTE,
  payload: noteData,
});

export const updateNote = (noteData) => ({
  type: UPDATE_NOTE,
  payload: noteData,
});

export const deleteNote = (noteId) => ({
  type: DELETE_NOTE,
  payload: noteId,
});

export const loadNote = (noteId) => ({
  type: LOAD_NOTE,
  payload: noteId,
});

export const toggleViewer = () => ({
  type: TOGGLE_VIEWER,
});
