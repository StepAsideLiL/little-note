import NoteTitleInput from "@/components/note/NoteTitleInput";
import SaveNoteButton from "@/components/note/SaveNoteButton";
import Sidebar from "@/components/sidebar/Sidebar";
import SwitchThemeButton from "@/components/SwitchThemeButton";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between px-5 py-5">
        <div className="flex items-center">
          <Sidebar />
          <NoteTitleInput />
        </div>

        <div className="flex items-center gap-2">
          <SaveNoteButton />
          <SwitchThemeButton />
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 py-10">{children}</main>
    </div>
  );
}
