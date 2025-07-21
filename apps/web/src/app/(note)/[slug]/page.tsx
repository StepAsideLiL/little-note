import EditorIndexedDB from "@/components/note/EditorIndexedDB";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const noteSlug = (await params).slug;

  return (
    <>
      <EditorIndexedDB noteSlug={noteSlug} />
    </>
  );
}
