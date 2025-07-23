import EditorIndexedDB from "@/components/note/EditorIndexedDB";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const noteId = (await params).id;

  return (
    <>
      <EditorIndexedDB noteId={noteId} />
    </>
  );
}
