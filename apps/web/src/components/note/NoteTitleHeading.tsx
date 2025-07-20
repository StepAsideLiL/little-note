"use client";

import { store } from "@/lib/store";
import { cn } from "@workspace/design-system/lib/utils";

export default function NoteTitleHeading() {
  const { get } = store.useNoteTitle();

  return (
    <label htmlFor="note-title">
      <h1 className={cn("heading", get === "" && "text-muted")}>
        {get === "" ? "Untitled Note" : get}
      </h1>
    </label>
  );
}
