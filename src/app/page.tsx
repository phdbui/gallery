import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (image, { desc }) => desc(image.createdAt),
  });

  return (
    <section className="container mx-auto flex flex-wrap gap-4">
      {images.map((item) => (
        <div key={item.id} className="w-[calc(33%-8px)] rounded border p-4">
          <div className="relative h-64 w-full">
            <Image src={item.url} alt={item.url} fill />
          </div>
          <h1 className="text-2xl font-semibold">{item.name}</h1>
          <p className="text-sm text-gray-500">
            Created at: {new Date(item.createdAt).toLocaleString("en-US")}
          </p>
        </div>
      ))}
    </section>
  );
}

export default async function HomePage() {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <p>Please sign in</p>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </>
  );
}
