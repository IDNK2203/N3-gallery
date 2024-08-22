import { Modal } from "./modal";
import PhotoPageContainer from "~/components/PhotoPageContainer";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const isIdNum = Number(photoId);
  const isNotNum = Number.isNaN(isIdNum);
  if (isNotNum) throw new Error("Invalid Id");

  return (
    <Modal>
      <PhotoPageContainer id={isIdNum} />
    </Modal>
  );
}
