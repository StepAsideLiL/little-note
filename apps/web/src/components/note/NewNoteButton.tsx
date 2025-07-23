import { store } from "@/lib/store";
import { Button } from "@workspace/design-system/ui/button";
import { useRouter } from "next/navigation";

export default function NewNoteButton({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const { set: setTitle } = store.useNoteTitle();
  const { set: setContent } = store.useNoteContent();

  return (
    <Button
      className="h-7 cursor-pointer"
      onClick={() => {
        router.push("/");
        setTitle("");
        setContent({});
        setIsOpen(false);
      }}
    >
      Create New Note
    </Button>
  );
}
