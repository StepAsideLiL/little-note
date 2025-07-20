import { atom, useAtom } from "jotai";
import { JSONContent } from "@workspace/editor";

const noteTitle = atom("");
function useNoteTitle() {
  const [get, set] = useAtom(noteTitle);
  return { get, set };
}

const noteContent = atom<JSONContent>({});
function useNoteContent() {
  const [get, set] = useAtom(noteContent);
  return { get, set };
}

export const store = {
  useNoteTitle,
  useNoteContent,
};
