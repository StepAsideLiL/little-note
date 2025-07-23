"use client";

import { iDB, useLiveQuery, noActiveNoteFoundString } from "@workspace/db";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ActiveNoteId() {
  const activeNoteId = useLiveQuery(() => iDB.getActiveNoteId());

  useEffect(() => {
    if (activeNoteId === undefined) {
      return;
    }

    async function createNewNote() {
      const id = await iDB.createNote("", {});
      await iDB.setActiveNoteId(id);
      redirect(`/${id}`);
    }

    if (activeNoteId === noActiveNoteFoundString) {
      createNewNote();
    } else {
      redirect(`/${activeNoteId}`);
    }
  }, [activeNoteId]);

  return null;
}
