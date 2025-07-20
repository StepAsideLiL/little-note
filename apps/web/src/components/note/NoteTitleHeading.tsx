"use client";

import { store } from "@/lib/store";
import { cn } from "@workspace/design-system/lib/utils";

export default function NoteTitleHeading() {
  const { get } = store.useNoteTitle();

  return (
    <h1 className={cn("heading", get === "" && "text-muted")}>
      {get === "" ? "Untitled Note" : get}
    </h1>
  );
}
