import SwitchThemeButton from "@/components/SwitchThemeButton";
import { Button } from "@workspace/design-system/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-1 py-10">
      <h1 className="text-2xl font-bold">Hi! 👋 </h1>
      <p>Welcome to Little Proj.</p>

      <div className="flex items-center gap-2">
        <Button asChild>
          <Link
            href={"https://stepasidelil.vercel.app/projects/little-proj"}
            target="_blank"
          >
            Read Docs and Start Coding
          </Link>
        </Button>
        <SwitchThemeButton />
      </div>
    </main>
  );
}
