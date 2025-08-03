"use client";

import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import { extensions } from "@workspace/editor/extension";
import "@workspace/editor/editor.css";

export default function Editor({
  content,
  readOnly = false,
  onContentUpdate,
}: {
  content?: JSONContent | string;
  readOnly?: boolean;
  onContentUpdate?: (content: JSONContent) => void;
}) {
  const editor = useEditor({
    extensions: [...extensions],
    content: content || "",
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editable: !readOnly,
    onUpdate: async ({ editor }) => {
      if (onContentUpdate) {
        onContentUpdate(editor.getJSON());
      }
    },
  });

  return <EditorContent editor={editor} />;
}
