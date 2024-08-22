// import { Modal } from './modal';

import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const isIdNum = Number(photoId);
  const isNotNum = Number.isNaN(isIdNum);
  if (isNotNum) throw new Error("Invalid Id");

  const Image = await getImage(isIdNum);

  return (
    <div>
      <img src={Image.url} className="h-56 w-96" />
    </div>
  );
}
