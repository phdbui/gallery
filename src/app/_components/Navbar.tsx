import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="container mx-auto mb-4 flex w-full items-center justify-between border-b py-4">
      <h1 className="">Gallery</h1>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
