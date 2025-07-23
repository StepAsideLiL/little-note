"use client";

import { iDB, useLiveQuery } from "@workspace/db";
import Editor from "./Editor";
import NoteTitleHeading from "./NoteTitleHeading";
import { useEffect } from "react";
import { store } from "@/lib/store";

export default function EditorIndexedDB({ noteId }: { noteId: string }) {
  const note = useLiveQuery(() => iDB.getNoteByNoteId(noteId));
  const { set: setTitle } = store.useNoteTitle();
  const { set: setContent } = store.useNoteContent();

  useEffect(() => {
    if (!note) {
      return;
    }

    setTitle(note.title);
    setContent(note.note);
  }, [note, setContent, setTitle]);

  if (!note) {
    return <p className="text-muted text-center text-xl">Note not found.</p>;
  }

  return (
    <>
      <NoteTitleHeading />
      <Editor note={note} />
    </>
  );
}
