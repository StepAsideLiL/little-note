"use client";

import { EditorContent, JSONContent, useEditor } from "@workspace/editor";
import { extensions } from "@workspace/editor/extension";
import "@workspace/editor/editor.css";
import { store } from "@/lib/store";

export default function Editor({ noteContent }: { noteContent?: JSONContent }) {
  const { set } = store.useNoteContent();

  const editor = useEditor({
    extensions: [...extensions],
    content: noteContent ? noteContent : "",
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    onUpdate({ editor }) {
      set(editor.getJSON());
    },
  });

  return (
    <>
      <EditorContent editor={editor} className="h-full" />
    </>
  );
}
