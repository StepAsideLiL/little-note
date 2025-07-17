"use client";

import { EditorContent, useEditor } from "@workspace/editor";
import { extension } from "@workspace/editor/extension";

export default function Editor() {
  const editor = useEditor({
    extensions: [extension.Document, extension.Paragraph, extension.Text],
    content: "<p>Hello World! 🌎️</p>",
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return <EditorContent editor={editor} />;
}
