"use client";

import { store } from "@/lib/store";
import { Button } from "@workspace/design-system/ui/button";
import { iDB } from "@workspace/db";
import { useRouter } from "next/navigation";
import { toast } from "@workspace/design-system/lib/toast";

export default function SaveNoteButton() {
  const router = useRouter();
  const { get: noteTitle } = store.useNoteTitle();
  const { get: noteContent } = store.useNoteContent();

  return (
    <Button
      variant={"secondary"}
      className="h-7 cursor-pointer"
      onClick={async () => {
        await iDB
          .createNote(noteTitle, noteContent)
          .then((noteSlug) => {
            router.push(`/${noteSlug}`);
          })
          .catch((error) => {
            toast.error("Error saving note");
            console.error(error);
          });
      }}
    >
      Save Note
    </Button>
  );
}
