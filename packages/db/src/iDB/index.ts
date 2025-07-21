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
  notes: "++id, slug",
});

/**
 * IndexedDB database API.
 */
export const iDB = {
  /**
   * Get all notes.
   */
  getAllNotes: async () => await localIndexedDB.notes.toArray(),

  /**
   * Get a note by slug.
   */
  getNoteBySlug: async (slug: string) => {
    return await localIndexedDB.notes.where("slug").equals(slug).first();
  },

  /**
   * Create a new note.
   */
  createNote: async (noteTitle: string, noteContent: JSONContent) => {
    const id = generateId();
    const slugifyTitle = generateSlug(noteTitle);

    return await localIndexedDB.notes
      .add({
        id: id,
        note: noteContent,
        title: noteTitle,
        slug: `${slugifyTitle}-${id}`,
        createdAt: new Date(),
      })
      .then(() => {
        return `${slugifyTitle}-${id}`;
      });
  },
};

export type TiDB = typeof iDB;
export type { TLittleNote };
