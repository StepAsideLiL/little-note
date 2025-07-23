"use client";

import { store } from "@/lib/store";
import { iDB } from "@workspace/db";
import { Input } from "@workspace/design-system/ui/input";
import { usePathname } from "next/navigation";

export default function NoteTitleInput() {
  const { get, set } = store.useNoteTitle();
  const { get: noteContent } = store.useNoteContent();
  const pathname = usePathname();
  const noteId = pathname.replace("/", "");

  return (
    <div>
      <Input
        id="note-title"
        className="bg-background dark:bg-background border-none shadow-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0"
        placeholder="Untitled Note"
        type="text"
        value={get}
        onChange={(e) => {
          if (pathname !== "/") {
            iDB.updateNote(noteId, e.target.value, noteContent);
          }

          set(e.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();

            const focusable = Array.from(
              document.querySelectorAll('[tabindex]:not([tabindex="-1"])')
            );

            (focusable[0] as HTMLElement).focus();
          }
        }}
      />
    </div>
  );
}
