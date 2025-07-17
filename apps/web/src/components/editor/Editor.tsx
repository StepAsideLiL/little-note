"use client";

import { EditorContent, extension, useEditor } from "@workspace/editor";

export default function Editor() {
  const editor = useEditor({
    extensions: [extension.Document, extension.Paragraph, extension.Text],
    content: "<p>Hello World! 🌎️</p>",
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return <EditorContent editor={editor} />;
}
