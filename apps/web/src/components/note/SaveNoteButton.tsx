"use client";

import { store } from "@/lib/store";
import { Button } from "@workspace/design-system/ui/button";

export default function SaveNoteButton() {
  const { get: noteTitle } = store.useNoteTitle();
  const { get: noteContent } = store.useNoteContent();

  return (
    <Button
      variant={"secondary"}
      className="h-7 cursor-pointer"
      onClick={() => {
        console.log(noteTitle, noteContent);
      }}
    >
      Save Note
    </Button>
  );
}
