import fonts from "@/lib/fonts";
import type { Metadata } from "next";
import "@workspace/design-system/globals.css";
import nextMetadata from "@/lib/next-metadata";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Sidebar from "@/components/sidebar/Sidebar";
import NoteTitleInput from "@/components/note/NoteTitleInput";
import SwitchThemeButton from "@/components/SwitchThemeButton";

export const metadata: Metadata = nextMetadata();

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts.inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-1 flex-col">
            <header className="flex items-center justify-between px-5 py-5">
              <div className="flex items-center">
                <Sidebar />
                <NoteTitleInput />
              </div>

              <SwitchThemeButton />
            </header>

            <main className="mx-auto w-full max-w-3xl flex-1 py-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
