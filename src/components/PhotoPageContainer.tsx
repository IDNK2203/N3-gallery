import { getImage } from "~/server/queries";

export default async function PhotoPageContainer({ id }: { id: number }) {
  const Image = await getImage(id);
  return (
    <div className="flex h-full w-full min-w-0 ">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={Image.url}
          className="flex-shrink object-contain"
          alt={"The is the image of a car"}
        />
      </div>
      <div className="w-48 flex-shrink-0 border-l">
        <p className="text-xl font-bold">{Image.name}</p>
      </div>
    </div>
  );
}
