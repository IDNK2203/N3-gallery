import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function PhotoPageContainer({ id }: { id: number }) {
  const idAsNumber = Number(id);

  const imageData = await getImage(id);
  const user = await clerkClient.users.getUser(imageData.userId);
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
      <div className="w-72 border-l-2">
        <div className="border-b-2 p-2 px-4">
          <p className="text-xl font-bold">{imageData.name}</p>
        </div>
        <div className="p-2 px-4">
          <p className="text-base">Uploded By:</p>
          <p className="text-lg font-bold">{user.firstName}</p>
        </div>
        <div className="p-2 px-4">
          <p className="text-base">Uploaded On:</p>
          <p className="text-lg font-bold">
            {imageData.createdAt.toLocaleDateString()}
          </p>
        </div>
        <div className="p-2 px-4">
          <form
            action={async () => {
              "use server";

              await deleteImage(idAsNumber);
            }}
          >
            <Button type="submit" variant="destructive">
              Button
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
