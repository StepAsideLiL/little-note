"use client";

import { EditorContent, useEditor } from "@workspace/editor";
import { extensions } from "@workspace/editor/extension";
import "@workspace/editor/editor.css";

export default function Editor() {
  const editor = useEditor({
    extensions: [...extensions],
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return (
    <>
      <EditorContent editor={editor} className="h-full" />
    </>
  );
}
