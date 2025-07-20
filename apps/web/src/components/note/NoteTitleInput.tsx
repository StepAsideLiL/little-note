"use client";

import { store } from "@/lib/store";
import { Input } from "@workspace/design-system/ui/input";

export default function NoteTitleInput() {
  const { get, set } = store.useNoteTitle();

  return (
    <div>
      <Input
        id="note-title"
        className="bg-background dark:bg-background border-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0"
        placeholder="Untitled Note"
        type="text"
        value={get}
        onChange={(e) => set(e.target.value)}
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
