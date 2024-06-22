"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex justify-between border-b p-4 text-xl font-semibold">
      <p>N3-Gallery</p>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <div className="flex *:ml-2">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              // Do something with the response
              router.refresh();
            }}
            // onUploadError={(error: Error) => {
            //   // Do something with the error.
            //   alert(`ERROR! ${error.message}`);
            // }}
          />
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  );
}
