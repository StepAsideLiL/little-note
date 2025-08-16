"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import { JSX } from "react";
import { FloatingMenu } from "@tiptap/react/menus";
import "@workspace/editor/editor.css";
import { extensions } from "../extensions";
import { Button } from "@workspace/design-system/ui/button";
import { Separator } from "@workspace/design-system/ui/separator";
import Icons from "@workspace/design-system/icons";
import { useEffect, useReducer } from "react";
import { JSONContent } from "@tiptap/core";

import { LinkDialog } from "./LinkDialog";

export default function Editor({
  content,
  readOnly = false,
  onContentUpdate,
}: {
  content?: JSONContent | string;
  readOnly?: boolean;
  onContentUpdate?: (content: JSONContent) => void;
}): JSX.Element {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

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

  useEffect(() => {
    if (!editor) return;
    editor.on("selectionUpdate", forceUpdate);
    editor.on("transaction", forceUpdate);
    return () => {
      editor.off("selectionUpdate", forceUpdate);
      editor.off("transaction", forceUpdate);
    };
  }, [editor]);

  return (
    <>
      {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => !state.selection.empty}
          options={{
            placement: "top-start",
          }}
        >
          <div className="bg-background flex h-9 items-center gap-1 border px-2 py-0.5">
            <Button
              variant={editor.isActive("bold") ? "default" : "outline"}
              size={"icon"}
              className="size-7 cursor-pointer"
              onClick={() => {
                editor.chain().focus().toggleBold().run();
              }}
            >
              <Icons.LucideIcon.Bold />
            </Button>

            <Button
              variant={editor.isActive("italic") ? "default" : "outline"}
              size={"icon"}
              className="size-7 cursor-pointer"
              onClick={() => {
                editor.chain().focus().toggleItalic().run();
              }}
            >
              <Icons.LucideIcon.Italic />
            </Button>

            <Button
              variant={editor.isActive("underline") ? "default" : "outline"}
              size={"icon"}
              className="size-7 cursor-pointer"
              onClick={() => {
                editor.chain().focus().toggleUnderline().run();
              }}
            >
              <Icons.LucideIcon.Underline />
            </Button>

            <LinkDialog editor={editor} />

            <Separator orientation="vertical" className="bg-foreground/30" />

            <Button
              variant={
                editor.getAttributes(
                  editor.state.selection.$anchor.node().type.name
                ).textAlign === "left"
                  ? "default"
                  : "outline"
              }
              size={"icon"}
              className="size-7 cursor-pointer"
              onClick={() => {
                editor.chain().focus().setTextAlign("left").run();
              }}
            >
              <Icons.LucideIcon.AlignLeft />
            </Button>

            <Button
              variant={
                editor.getAttributes(
                  editor.state.selection.$anchor.node().type.name
                ).textAlign === "center"
                  ? "default"
                  : "outline"
              }
              size={"icon"}
              className="size-7 cursor-pointer"
              onClick={() => {
                editor.chain().focus().setTextAlign("center").run();
              }}
            >
              <Icons.LucideIcon.AlignCenter />
            </Button>

            <Button
              variant={
                editor.getAttributes(
                  editor.state.selection.$anchor.node().type.name
                ).textAlign === "right"
                  ? "default"
                  : "outline"
              }
              size={"icon"}
              className="size-7 cursor-pointer"
              onClick={() => {
                editor.chain().focus().setTextAlign("right").run();
              }}
            >
              <Icons.LucideIcon.AlignRight />
            </Button>

            <Button
              variant={
                editor.getAttributes(
                  editor.state.selection.$anchor.node().type.name
                ).textAlign === "justify"
                  ? "default"
                  : "outline"
              }
              size={"icon"}
              className="size-7 cursor-pointer"
              onClick={() => {
                editor.chain().focus().setTextAlign("justify").run();
              }}
            >
              <Icons.LucideIcon.AlignJustify />
            </Button>
          </div>
        </FloatingMenu>
      )}
      <EditorContent editor={editor} />
    </>
  );
}
