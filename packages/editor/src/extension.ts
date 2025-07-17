// import * as Blockquote from "@tiptap/extension-blockquote";
// import * as Bold from "@tiptap/extension-bold";
// import * as Color from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
// import * as Image from "@tiptap/extension-image";
// import * as Italic from "@tiptap/extension-italic";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
// import * as TextStyle from "@tiptap/extension-text-style";
// import * as TextAlign from "@tiptap/extension-text-align";
// import * as Underline from "@tiptap/extension-underline";
import { textblockTypeInputRule } from "@tiptap/react";

export const extensions = [
  Document,
  Heading.configure({
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
  Paragraph.configure({
    HTMLAttributes: {
      class: "text-base font-normal leading-normal",
    },
  }),
  Text,
];
