"use client";

import { EditorContent, useEditor } from "@workspace/editor";
import { extensions } from "@workspace/editor/extension";
import "@workspace/editor/editor.css";

export default function Editor() {
  const editor = useEditor({
    extensions,
    content: `<h2>Hello World! 🌎️</h2>
<h3>This is a heading 2.</h3>
<h4>This is a heading 3.</h4>
<p>This is a paragraph.</p>
    `,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return (
    <>
      <EditorContent editor={editor} />

      <pre className="text-muted-foreground">
        {JSON.stringify(editor?.getJSON(), null, 2)}
      </pre>
    </>
  );
}
