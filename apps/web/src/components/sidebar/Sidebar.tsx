"use client";

import Icons from "@workspace/design-system/icons";
import { Button } from "@workspace/design-system/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/design-system/ui/sheet";

export default function Sidebar() {
  return (
    <Sheet>
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
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
