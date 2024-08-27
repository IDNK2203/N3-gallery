export const dynamic = "force-dynamic";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

async function ImageGallery() {
  const dbImages = await getMyImages();

  return (
    <ul className="grid  grid-cols-4 gap-2">
      {dbImages.map(({ url, id, name }, index) => (
        <li key={id} className="flex-1">
          <Link href={"/imgs/" + id}>
            <div className="relative aspect-video w-full">
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
        </li>
      ))}
    </ul>
  );
}

export default function HomePage() {
  return (
    <main className="p-2">
      <div className="my-2">
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
