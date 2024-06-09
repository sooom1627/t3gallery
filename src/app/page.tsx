import Image from "next/image";
import { db } from "~/server/db";

const mockUrls = [
  "https://picsum.photos/id/32/900/600.jpg",
  "https://picsum.photos/id/48/900/600.jpg",
  "https://picsum.photos/id/64/900/600.jpg",
  "https://picsum.photos/id/80/900/600.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <Image
              src={image.url}
              alt={`image-${image.id}`}
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
