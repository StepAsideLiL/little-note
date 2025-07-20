"use client";

import { EditorContent, useEditor } from "@workspace/editor";
import { extensions } from "@workspace/editor/extension";
import "@workspace/editor/editor.css";
import { store } from "@/lib/store";

export default function Editor() {
  const { set } = store.useNoteContent();

  const editor = useEditor({
    extensions: [...extensions],
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
