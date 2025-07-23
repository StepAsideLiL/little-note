// import Editor from "@/components/note/Editor";
import EditorIndexedDB from "@/components/note/EditorIndexedDB";
// import NoteTitleHeading from "@/components/note/NoteTitleHeading";
import nextMetadata from "@/lib/next-metadata";
import { Metadata } from "next";

export const metadata: Metadata = nextMetadata("New Note", "Write your note");

export default function Page() {
  return (
    <>
      <EditorIndexedDB noteId="draftNote" />
    </>
  );
}
