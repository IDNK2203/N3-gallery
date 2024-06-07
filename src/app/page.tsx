import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const imgUrlList = [
  "https://utfs.io/f/f86f7614-9086-436c-ae16-9dbde6e99c27-2i31a6.webp",
  " https://utfs.io/f/d67fef67-5341-4df9-8ac7-b46e895b2698-gva93o.png ",
  "https://utfs.io/f/ff890bdd-ebae-4fd4-8d1c-199be1f68f0a-222ki9.webp",
  "https://utfs.io/f/393b5a9f-2a1b-4b7c-9471-d5f4f5efbecf-3qs5m3.webp",
];

const imgDataList = imgUrlList.map((url, i) => {
  return {
    id: i + 1,
    url,
  };
});

export default async function HomePage() {
  const dbPosts = await db.query.posts.findMany();
  console.log(dbPosts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
        {dbPosts.map((el) => (
          <div key={el.id}>{el.name}</div>
        ))}
        {[...imgDataList, ...imgDataList, ...imgDataList].map(
          ({ url, id }, index) => (
            <div key={id + "-" + index} className="w-48">
              <img src={url} />
            </div>
          ),
        )}
      </div>
      <h1> Hello Gallery In Progress</h1>
    </main>
  );
}
