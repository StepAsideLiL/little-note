import * as D from "@tiptap/extension-document";
import * as T from "@tiptap/extension-text";
import * as P from "@tiptap/extension-paragraph";
import * as H from "@tiptap/extension-heading";
import * as Img from "@tiptap/extension-image";
import * as B from "@tiptap/extension-bold";
import * as Ita from "@tiptap/extension-italic";
import * as U from "@tiptap/extension-underline";
import * as C from "@tiptap/extension-color";
import * as TS from "@tiptap/extension-text-style";
import * as TA from "@tiptap/extension-text-align";

export const extension = {
  Bold: B.Bold,
  Color: C.Color,
  Document: D.Document,
  Heading: H.Heading,
  Image: Img.Image,
  Italic: Ita.Italic,
  Paragraph: P.Paragraph,
  Text: T.Text,
  Underline: U.Underline,
  TextAlign: TA.TextAlign,
  TextStyle: TS.TextStyle,
};
