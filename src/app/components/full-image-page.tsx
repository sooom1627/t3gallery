import { clerkClient } from "@clerk/nextjs/server";
import { getImageById } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImageById(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex max-w-[70vw] flex-grow-0 items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="max-w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col border-l-2 border-white">
        <div className="w-full border-b p-2 text-center text-lg">
          {image.name}
        </div>
        <div className="flex flex-col p-2">
          <span>Uploaded by: </span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On: </span>
          <span>{image.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
