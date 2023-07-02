import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-24">
      <div className="text-center">
        <div className=" text-6xl font-bold mb-4">I am u5u5u5u</div>
        <Link href="/todo" className="text-yellow-500">
          TODOアプリのページに移動
        </Link>
      </div>
    </div>
  );
}
