import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-24">
      <div className="text-center">
        <div className=" text-6xl font-bold mb-4">I am chokomonaka085</div>
        <Link href="/todo" className="text-blue-500">
          TODOアプリのページに移動aa
        </Link>
      </div>
    </div>
  );
}
