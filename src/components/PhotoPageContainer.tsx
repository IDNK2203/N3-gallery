import { getImage } from "~/server/queries";

export default async function PhotoPageContainer({ id }: { id: number }) {
  const Image = await getImage(id);
  return <img src={Image.url} className="h-56 w-96" />;
}
