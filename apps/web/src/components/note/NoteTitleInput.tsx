"use client";

import { store } from "@/lib/store";
import { Input } from "@workspace/design-system/ui/input";

export default function NoteTitleInput() {
  const { get, set } = store.useNoteTitle();

  return (
    <div>
      <Input
        className="bg-background dark:bg-background border-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0"
        placeholder="Untitled Note"
        type="text"
        value={get}
        onChange={(e) => set(e.target.value)}
      />
    </div>
  );
}
