import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const dbImages = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(dbImages);

  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
        {[...dbImages, ...dbImages, ...dbImages].map(
          ({ url, id, name }, index) => (
            <div key={id + "-" + index} className="w-48">
              <img src={url} />
              <p>{name}</p>
            </div>
          ),
        )}
      </div>
      <h1> Hello Gallery In Progress</h1>
    </main>
  );
}
