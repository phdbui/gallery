"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function Navbar() {
  const router = useRouter();
  return (
    <nav className="container mx-auto mb-4 flex w-full items-center justify-between border-b py-4">
      <h1 className="">Gallery</h1>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => router.refresh()}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
