import { atom, useAtom } from "jotai";

const noteTitle = atom("");
function useNoteTitle() {
  const [get, set] = useAtom(noteTitle);
  return { get, set };
}

export const store = {
  useNoteTitle,
};
