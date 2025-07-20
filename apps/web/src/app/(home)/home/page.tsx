import nextMetadata from "@/lib/next-metadata";
import { Button } from "@workspace/design-system/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = nextMetadata(
  "Home",
  "Home Page of Little Note"
);

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>
        <span>Little</span>
        <span className="text-6xl font-semibold">Note</span>
      </h1>

      <p>Take Quick and Powerful Note</p>

      <Button className="" asChild>
        <Link href={"/"}>Take a Note</Link>
      </Button>
    </div>
  );
}
