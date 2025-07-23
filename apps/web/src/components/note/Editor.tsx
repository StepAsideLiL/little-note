"use client";

import { EditorContent, useEditor } from "@workspace/editor";
import { extensions } from "@workspace/editor/extension";
import "@workspace/editor/editor.css";
import { store } from "@/lib/store";
import { usePathname } from "next/navigation";
import { iDB, TLittleNote } from "@workspace/db";
import { generateSlug } from "@workspace/db/lib";

export default function Editor({ note }: { note?: TLittleNote }) {
  const { set } = store.useNoteContent();
  const { get: noteTitle } = store.useNoteTitle();
  const pathname = usePathname();

  const editor = useEditor({
    extensions: [...extensions],
    content: note?.note ? note.note : "",
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    onUpdate: async ({ editor }) => {
      if (pathname !== "/" && note) {
        await iDB.updateNote(note.id, noteTitle, editor.getJSON());
      } else if (pathname === "/") {
        await iDB.draftNote({
          id: "draftNote",
          title: noteTitle,
          note: editor.getJSON(),
          createdAt: new Date(),
          slug: `${generateSlug(noteTitle)}-draftNote`,
        });
        set(editor.getJSON());
      } else {
        set(editor.getJSON());
      }
    },
  });

  console.log(note?.note);

  return (
    <>
      <EditorContent editor={editor} className="h-full" />
    </>
  );
}
