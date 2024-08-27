import PhotoPageContainer from "~/components/PhotoPageContainer";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const isIdNum = Number(photoId);
  const isNotNum = Number.isNaN(isIdNum);
  if (isNotNum) throw new Error("Invalid Id");

  return (
    <main className="m-2">
      <PhotoPageContainer id={isIdNum} />
    </main>
  );
}
