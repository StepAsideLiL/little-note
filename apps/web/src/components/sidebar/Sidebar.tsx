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
import { iDB, myNoteIdString, useLiveQuery } from "@workspace/db";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@workspace/design-system/lib/utils";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const notes = useLiveQuery(() => iDB.getAllNotes());
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
                <div
                  key={note.id}
                  className="hover:bg-muted/60 rounded-xs flex h-8 items-center justify-between"
                >
                  <Link
                    key={note.id}
                    href={`/${note.id}`}
                    className={cn(
                      "text-muted-foregroun flex-1 px-2 py-1 text-sm font-normal",
                      note.title === "" && "text-muted-foreground/50"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {note.title === "" ? "Untitled" : note.title}
                  </Link>

                  {note.id === myNoteIdString || (
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      className="hover:text-destructive text-destructive/60 mr-1 size-6 cursor-pointer"
                      onClick={async () => {
                        await iDB.deleteNote(note.id).then(async () => {
                          router.replace(`/${myNoteIdString}`);
                          await iDB.setActiveNoteId(myNoteIdString);
                        });
                      }}
                    >
                      <Icons.LucideIcon.Trash size={8} />
                    </Button>
                  )}
                </div>
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
