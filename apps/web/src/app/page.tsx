import Editor from "@/components/Editor";
import SwitchThemeButton from "@/components/SwitchThemeButton";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-1 py-10">
      <h1 className="text-2xl font-bold">Hi! 👋 </h1>

      <div className="flex items-center gap-2">
        <p>Welcome to Little Note.</p>
        <SwitchThemeButton />
      </div>

      <Editor />
    </main>
  );
}
