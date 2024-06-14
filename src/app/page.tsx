import { db } from "~/server/db";
export const dynamic = "force-dynamic";

import { SignedIn, SignedOut } from "@clerk/nextjs";

async function ImageGallery() {
  const dbImages = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <>
      {[...dbImages, ...dbImages, ...dbImages].map(
        ({ url, id, name }, index) => (
          <div key={id + "-" + index} className="w-48">
            <img src={url} />
            <p>{name}</p>
          </div>
        ),
      )}
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
