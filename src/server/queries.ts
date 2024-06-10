import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export const getImages = async () => {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
};
