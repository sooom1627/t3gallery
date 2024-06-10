"use client";

import { SignedIn, UserButton } from "@clerk/clerk-react";
import { SignInButton, SignedOut } from "@clerk/nextjs";

export const TopNav = () => {
  return (
    <nav className="flex items-center justify-between border-b p-4 ">
      <div className="tex-xl font-semibold">Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
