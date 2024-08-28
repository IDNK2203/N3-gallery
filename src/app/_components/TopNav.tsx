import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import SimpleUploadBtn from "./simple-upload-btn";

export default function TopNav() {
  return (
    <nav className="flex justify-between border-b-2 p-4 text-xl font-semibold">
      <p>
        {" "}
        <Link href={"/"}>N3-Gallery</Link>
      </p>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <div className="flex *:ml-3">
          <SimpleUploadBtn />
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  );
}
