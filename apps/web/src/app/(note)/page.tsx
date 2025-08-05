import ActiveNoteId from "@/components/ActiveNoteId";
import nextMetadata from "@/lib/next-metadata";
import { Metadata } from "next";

export const metadata: Metadata = nextMetadata();

export default function Page() {
  return (
    <>
      <ActiveNoteId />
    </>
  );
}
