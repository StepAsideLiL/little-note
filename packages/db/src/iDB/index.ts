import Dexie, { type EntityTable } from "dexie";
import { JSONContent } from "@workspace/editor";
import { generateId, generateSlug } from "@workspace/db/lib";
export { useLiveQuery } from "dexie-react-hooks";

type TLittleNote = {
  id: string;
  title: string;
  slug: string;
  note: JSONContent;
  createdAt: Date;
};

type TActionNoteId = {
  id: string;
};

export const noActiveNoteFoundString = "no-active-note-found";
export const activeNoteIdString = "active-note-id";
export const myNoteIdString = "my-note";

const localIndexedDB = new Dexie("content") as Dexie & {
  notes: EntityTable<TLittleNote, "id">;
  activeNoteId: EntityTable<TActionNoteId, "id">;
};

localIndexedDB.version(1).stores({
  notes: "++id, slug",
  activeNoteId: "++id",
});

/**
 * IndexedDB database API.
 */
export const iDB = {
  getActiveNoteId: async () => {
    const activeNote = await localIndexedDB.activeNoteId.toArray();

    if (activeNote.length !== 0) {
      return activeNote[0]!.id;
    } else {
      return noActiveNoteFoundString;
    }
  },

  setActiveNoteId: async (noteId: string) => {
    await localIndexedDB.activeNoteId.clear();
    await localIndexedDB.activeNoteId.add({ id: noteId });
  },

  /**
   * Get all notes.
   */
  getAllNotes: async () =>
    (await localIndexedDB.notes.toArray()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    ),

  /**
   * Get a note by slug.
   */
  getNoteByNoteId: async (noteId: string) => {
    return await localIndexedDB.notes.where("id").equals(noteId).first();
  },

  /**
   * Create a new note.
   */
  createNote: async (
    noteTitle: string,
    noteContent: JSONContent,
    noteId?: string
  ) => {
    const id = noteId ? noteId : generateId();
    const slugifyTitle = generateSlug(noteTitle);

    return await localIndexedDB.notes.add({
      id: id,
      note: noteContent,
      title: noteTitle,
      slug: `${slugifyTitle}-${id}`,
      createdAt: new Date(),
    });
  },

  updateNote: async (
    noteId: string,
    noteTitle: string,
    noteContent: JSONContent
  ) => {
    const slugifyTitle = generateSlug(noteTitle);

    return await localIndexedDB.notes.update(noteId, {
      title: noteTitle,
      note: noteContent,
      slug: `${slugifyTitle}-${noteId}`,
    });
  },

  deleteNote: async (noteId: string) => {
    if (noteId === myNoteIdString) {
      return;
    }
    await localIndexedDB.notes.delete(noteId);
  },
};

export type TiDB = typeof iDB;
export type { TLittleNote };
export type { TActionNoteId };
