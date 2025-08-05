"use client";

import "@workspace/editor/editor.css";
import { store } from "@/lib/store";
import { usePathname } from "next/navigation";
import { iDB, TLittleNote } from "@workspace/db";
import { Editor as EditorComponent } from "@workspace/editor";

export default function Editor({ note }: { note?: TLittleNote }) {
  const { set } = store.useNoteContent();
  const { get: noteTitle } = store.useNoteTitle();
  const pathname = usePathname();

  return (
    <>
      <EditorComponent
        content={note?.note}
        onContentUpdate={async (content) => {
          if (pathname !== "/" && note) {
            await iDB.updateNote(note.id, noteTitle, content);
          } else {
            set(content);
          }
        }}
      />
    </>
  );
}
