export const dynamic = "force-dynamic";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

async function ImageGallery() {
  const dbImages = await getMyImages();

  return (
    <>
      {dbImages.map(({ url, id, name }, index) => (
        <div key={id} className="">
          <Link href={"/imgs/" + id}>
            <div className="relative h-36 w-56">
              <Image
                alt={name}
                src={url}
                fill
                // sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
              />
            </div>
          </Link>
          <p className="my-2">{name}</p>
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
