import Dexie, { type EntityTable } from "dexie";
import { JSONContent } from "@workspace/editor";
export { useLiveQuery } from "dexie-react-hooks";

type TLittleNote = {
  id: string;
  title: string;
  note: JSONContent;
  createdAt: Date;
};

const localIndexedDB = new Dexie("content") as Dexie & {
  notes: EntityTable<TLittleNote, "id">;
};

localIndexedDB.version(1).stores({
  notes: "++id",
});

export const iDB = {
  /**
   * Get all notes.
   * @returns TLittleNote[]
   */
  getAllNotes: async () => await localIndexedDB.notes.toArray(),

  /**
   * Create a new note if not exist.
   * @param note TLittleNote
   * @returns TLittleNote
   */
  createNote: async (note: TLittleNote) =>
    await localIndexedDB.notes.put(note, note.id),
};

export type TiDB = typeof iDB;
export type { TLittleNote };
