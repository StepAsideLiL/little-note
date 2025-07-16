import { Button } from "@workspace/design-system/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="w-full max-w-2xl">
        <Image
          src="/images/404.webp"
          alt="404"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <Button
          variant={"outline"}
          className="w-80 cursor-pointer uppercase"
          asChild
        >
          <Link href={"/"}>Go Back To Home</Link>
        </Button>
      </div>
    </main>
  );
}
