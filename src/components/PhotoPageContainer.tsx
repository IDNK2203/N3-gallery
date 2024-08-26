import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoPageContainer({ id }: { id: number }) {
  const imageData = await getImage(id);
  return (
    <div className="flex h-full w-full min-w-0 ">
      <div className="relative aspect-[16/8] w-full flex-1">
        <Image
          alt={imageData.name}
          src={imageData.url}
          fill
          // sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "contain", // cover, contain, none
          }}
        />
      </div>
      <div className="w-72 border-l">
        <p className="text-xl font-bold">{Image.name}</p>
      </div>
    </div>
  );
}
