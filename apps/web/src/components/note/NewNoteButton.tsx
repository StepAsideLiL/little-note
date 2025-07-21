import { store } from "@/lib/store";
import { Button } from "@workspace/design-system/ui/button";
import { useRouter } from "next/navigation";

export default function NewNoteButton() {
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
      }}
    >
      Create New Note
    </Button>
  );
}
