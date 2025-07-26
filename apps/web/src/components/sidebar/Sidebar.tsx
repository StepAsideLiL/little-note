"use client";

import Icons from "@workspace/design-system/icons";
import { Button } from "@workspace/design-system/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/design-system/ui/sheet";
import NewNoteButton from "@/components/note/NewNoteButton";
import { iDB, useLiveQuery } from "@workspace/db";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@workspace/design-system/lib/utils";

export default function Sidebar() {
  const notes = useLiveQuery(() => iDB.getAllNotes());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="size-6 cursor-pointer"
          asChild
        >
          <Icons.RemixIcons.RiSideBarLine size={24} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>Notes</SheetTitle>
          <NewNoteButton setIsOpen={setIsOpen} />
        </SheetHeader>

        <div className="p-5">
          {notes && notes.length !== 0 ? (
            <div>
              {notes.map((note) => (
                <Link
                  key={note.id}
                  href={`/${note.id}`}
                  className={cn(
                    "hover:bg-muted/60 rounded-xs flex h-8 items-center justify-between px-2 py-1 text-sm"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <div
                    className={cn(
                      "text-muted-foreground",
                      note.title === "" && "text-muted-foreground/50"
                    )}
                  >
                    {note.title === "" ? "Untitled" : note.title}
                  </div>

                  <Button
                    variant={"outline"}
                    size={"icon"}
                    className="hover:text-destructive text-destructive/60 size-6 cursor-pointer"
                    onClick={async (event) => {
                      event.stopPropagation();
                      await iDB.deleteNote(note.id);
                    }}
                  >
                    <Icons.LucideIcon.Trash size={8} />
                  </Button>
                </Link>
              ))}
            </div>
          ) : (
            <div>
              <p className="text-muted text-center">No notes yet.</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
