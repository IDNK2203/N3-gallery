import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("unauthorized");

  const dbImages = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return dbImages;
}
export async function getImage(id: number) {
  const user = auth();

  if (!user.userId) throw new Error("unauthorized");

  const dbImage = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!dbImage) throw new Error("Image Not Found");

  if (user.userId !== dbImage?.userId) throw new Error("unauthorized");

  return dbImage;
}
