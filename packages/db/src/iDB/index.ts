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

const localIndexedDB = new Dexie("content") as Dexie & {
  notes: EntityTable<TLittleNote, "id">;
};

localIndexedDB.version(1).stores({
  notes: "++id",
});

/**
 * IndexedDB database API.
 */
export const iDB = {
  /**
   * Get all notes.
   * @returns TLittleNote[]
   */
  getAllNotes: async () => await localIndexedDB.notes.toArray(),

  /**
   * Create a new note.
   * @param noteTitle Title of the note.
   * @param noteContent Content of the note.
   * @returns noteId Id of the note.
   */
  createNote: async (noteTitle: string, noteContent: JSONContent) => {
    const id = generateId();
    const slugifyTitle = generateSlug(noteTitle);

    return await localIndexedDB.notes.add({
      id: id,
      note: noteContent,
      title: noteTitle,
      slug: `${slugifyTitle}-${id}`,
      createdAt: new Date(),
    });
  },
};

export type TiDB = typeof iDB;
export type { TLittleNote };
