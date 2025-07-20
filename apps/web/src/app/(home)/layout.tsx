import Logo from "@/components/Logo";
import SwitchThemeButton from "@/components/SwitchThemeButton";
import { Button } from "@workspace/design-system/ui/button";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo size={24} />
            <span>Little Note</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={"secondary"}
              className="h-7 cursor-pointer"
              asChild
            >
              <Link href={"/"}>New Note</Link>
            </Button>
            <SwitchThemeButton />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl">{children}</main>
    </div>
  );
}
