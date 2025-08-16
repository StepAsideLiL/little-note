import { JSX, useEffect, useRef, useState } from "react";
import {
  useFloating,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";
import { Button } from "@workspace/design-system/ui/button";
import { Input } from "@workspace/design-system/ui/input";
import { Editor } from "@tiptap/core";
import Icons from "@workspace/design-system/icons";

export function LinkDialog({ editor }: { editor: Editor }): JSX.Element {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Floating UI setup
  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(10), flip(), shift()],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <Button
        ref={refs.setReference}
        {...getReferenceProps()}
        variant="outline"
        size="icon"
        className="size-7 cursor-pointer"
      >
        <Icons.LucideIcon.Link />
      </Button>

      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="bg-background w-full max-w-[140px] rounded border p-1 shadow"
          >
            <Input
              ref={inputRef}
              className="focus-visible:border-0 focus-visible:ring-0"
            />
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
