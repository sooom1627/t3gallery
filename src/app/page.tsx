import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export const Images = async () => {
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image) => (
        <div key={image.id} className="flex w-48 flex-col items-center">
          <Image
            src={image.url}
            alt={`image-${image.id}`}
            width={300}
            height={200}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="flex h-full w-full items-center justify-center text-2xl">
          Please sign in to continue
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
