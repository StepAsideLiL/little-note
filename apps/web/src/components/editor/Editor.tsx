"use client";

import {
  EditorContent,
  textblockTypeInputRule,
  useEditor,
} from "@workspace/editor";
import { extension } from "@workspace/editor/extension";
import "@workspace/editor/editor.css";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      extension.Heading.configure({
        levels: [2, 3, 4],
        HTMLAttributes: {
          class: "heading",
        },
      }).extend({
        addInputRules() {
          return this.options.levels.map((level: number) => {
            return textblockTypeInputRule({
              find: new RegExp(
                `^(#{${Math.min(...this.options.levels) - 1},${level}})\\s$`
              ),
              type: this.type,
              getAttributes: {
                level,
              },
            });
          });
        },
      }),
      extension.Document,
      extension.Paragraph.configure({
        HTMLAttributes: {
          class: "text-base font-normal leading-normal",
        },
      }),
      extension.Text,
    ],
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
