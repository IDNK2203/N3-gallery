export const dynamic = "force-dynamic";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

async function ImageGallery() {
  const dbImages = await getMyImages();

  return (
    <>
      {dbImages.map(({ url, id, name }, index) => (
        <div key={id} className="h-max">
          <div className="relative h-36">
            <Image
              alt={name}
              src={url}
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: "contain", // cover, contain, none
              }}
            />
            <p className="my-2">{name}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
        <SignedIn>
          <ImageGallery />
        </SignedIn>
        <SignedOut>
          <p className="mx-auto text-center ">
            {" "}
            Sign In to View your Gallery 👍
          </p>
        </SignedOut>
      </div>
    </main>
  );
}
