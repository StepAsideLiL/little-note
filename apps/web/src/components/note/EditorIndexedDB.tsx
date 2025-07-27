"use client";

import { iDB, useLiveQuery } from "@workspace/db";
import Editor from "./Editor";
import NoteTitleHeading from "./NoteTitleHeading";
import { useEffect } from "react";
import { store } from "@/lib/store";
import { usePathname } from "next/navigation";
import { Skeleton } from "@workspace/design-system/ui/skeleton";

export default function EditorIndexedDB({ noteId }: { noteId: string }) {
  const note = useLiveQuery(() => iDB.getNoteByNoteId(noteId));
  const pathname = usePathname();
  const { set: setTitle } = store.useNoteTitle();
  const { set: setContent } = store.useNoteContent();

  useEffect(() => {
    if (pathname === "/") {
      if (note) {
        setTitle(note.title);
        setContent(note.note);
      } else {
        setTitle("");
        setContent({});
      }
    } else if (pathname !== "/") {
      if (note) {
        setTitle(note.title);
        setContent(note.note);
      }
    }
  }, [note, pathname, setContent, setTitle]);

  if (!note) {
    if (pathname === "/") {
      return (
        <>
          <NoteTitleHeading />
          <Editor />
        </>
      );
    } else {
      return (
        <div className="space-y-3">
          <Skeleton className="h-10 w-full"></Skeleton>
          <Skeleton className="h-6 w-full"></Skeleton>
        </div>
      );
    }
  }

  return (
    <>
      <NoteTitleHeading />
      <Editor note={note} />
    </>
  );
}
