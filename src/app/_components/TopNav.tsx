"use client";

import { SignedIn, UserButton, SignInButton, SignedOut } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";

export const TopNav = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between border-b p-4 ">
      <div className="tex-xl font-semibold">Gallery</div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
