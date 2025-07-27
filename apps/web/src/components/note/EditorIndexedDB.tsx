"use client";

import { iDB, useLiveQuery } from "@workspace/db";
import Editor from "./Editor";
import NoteTitleHeading from "./NoteTitleHeading";
import { useEffect } from "react";
import { store } from "@/lib/store";
import { useRouter } from "next/navigation";
import { Skeleton } from "@workspace/design-system/ui/skeleton";

export default function EditorIndexedDB({ noteId }: { noteId: string }) {
  const note = useLiveQuery(() => iDB.getNoteByNoteId(noteId));
  const router = useRouter();
  const { set: setTitle } = store.useNoteTitle();
  const { set: setContent } = store.useNoteContent();

  useEffect(() => {
    if (!note) {
      const timeout = setTimeout(() => {
        router.replace("/my-note");
      }, 300);

      return () => clearTimeout(timeout);
    }

    if (note) {
      setTitle(note.title);
      setContent(note.note);
    } else {
      setTitle("");
      setContent({});
    }
  }, [note, router, setContent, setTitle]);

  if (!note) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-10 w-full"></Skeleton>
        <Skeleton className="h-6 w-full"></Skeleton>
      </div>
    );
  }

  return (
    <>
      <NoteTitleHeading />
      <Editor note={note} />
    </>
  );
}
