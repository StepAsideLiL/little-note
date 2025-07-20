import nextMetadata from "@/lib/next-metadata";
import { Metadata } from "next";

export const metadata: Metadata = nextMetadata(
  "Home",
  "Home Page of Little Note"
);

export default function Page() {
  return <div>Page</div>;
}
