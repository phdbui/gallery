import Image from "next/image";

const mockUrls = [
  "https://gom5q4u851.ufs.sh/f/Iawfk97DLNEbxZzam6kEI4q0MtlTGWdCraAen7v6SkLo93cb",
  "https://gom5q4u851.ufs.sh/f/Iawfk97DLNEbXj07PeMYufz47mCcH5hqgbVL9D6n3TOBAEWJ",
  "https://gom5q4u851.ufs.sh/f/Iawfk97DLNEbLzMIuxkCwO8K4TPMNbq15uASF2eXsVpmyUHG",
];

const mockData = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
  title: `Title ${index + 1}`,
  description: `Description for URL ${index + 1}`,
}));

export default function HomePage() {
  return (
    <main className="container mx-auto flex flex-wrap">
      {mockData.map((item) => (
        <div key={item.id} className="w-1/3 rounded border p-4">
          <h2 className="text-lg font-bold">{item.title}</h2>
          <p className="text-gray-700">{item.description}</p>
          <div className="relative h-64 w-full">
            <Image src={item.url} alt={item.title} fill />
          </div>
        </div>
      ))}
    </main>
  );
}
