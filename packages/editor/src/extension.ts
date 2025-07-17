// import * as Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
// import * as Color from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
// import * as Image from "@tiptap/extension-image";
import Italic from "@tiptap/extension-italic";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
// import * as TextStyle from "@tiptap/extension-text-style";
// import * as TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { textblockTypeInputRule } from "@tiptap/react";
import { cn } from "@workspace/design-system/lib/utils";

export const extensions = [
  Bold.configure({
    HTMLAttributes: {
      class: "font-bold",
    },
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
  Italic.configure({
    HTMLAttributes: {
      class: cn("italic"),
    },
  }),
  Paragraph.configure({
    HTMLAttributes: {
      class: cn("text-base font-normal leading-normal"),
    },
  }),
  Text,
  Underline.configure({
    HTMLAttributes: {
      class: cn("underline"),
    },
  }),
];
