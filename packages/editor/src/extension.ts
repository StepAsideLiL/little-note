import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import { BulletList, ListItem, OrderedList } from "@tiptap/extension-list";
// import * as Color from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
// import * as Image from "@tiptap/extension-image";
import Italic from "@tiptap/extension-italic";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
// import * as TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { textblockTypeInputRule } from "@tiptap/react";
import { cn } from "@workspace/design-system/lib/utils";

export const extensions = [
  Blockquote.configure({
    HTMLAttributes: {
      class: cn("border-l-2 px-5 py-2.5 mx-5 my-2.5"),
    },
  }),
  Bold.configure({
    HTMLAttributes: {
      class: cn("font-bold"),
    },
  }),
  BulletList.configure({
    HTMLAttributes: {
      class: cn("list-disc list-inside"),
    },
    itemTypeName: "listItem",
  }),
  Document,
  Heading.configure({
    levels: [2, 3, 4],
    HTMLAttributes: {
      class: cn("heading"),
    },
  }).extend({
    addInputRules() {
      return this.options.levels.map((level: number) => {
        return textblockTypeInputRule({
          find: new RegExp(
            `^(#{${Math.min(...this.options.levels) - 1},${level - 1}})\\s$`
          ),
          type: this.type,
          getAttributes: {
            level,
          },
        });
      });
    },
  }),
  HorizontalRule.configure({
    HTMLAttributes: {
      class: cn("text-muted-foreground"),
    },
  }),
  Italic.configure({
    HTMLAttributes: {
      class: cn("italic"),
    },
  }),
  ListItem.configure({
    HTMLAttributes: {
      class: cn("*:inline-block"),
    },
  }),
  OrderedList.configure({
    HTMLAttributes: {
      class: cn("list-decimal list-inside"),
    },
  }),
  Paragraph.configure({
    HTMLAttributes: {
      class: cn("text-base font-normal leading-normal"),
    },
  }),
  Text,
  TextAlign.configure({
    types: ["heading", "paragraph"],
    defaultAlignment: "left",
  }),
  Underline.configure({
    HTMLAttributes: {
      class: cn("underline"),
    },
  }),
];
