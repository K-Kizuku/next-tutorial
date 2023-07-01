import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <div>Welcome to KCL!!</div>
      <Link href="/todo">TODOアプリのページに移動</Link>
    </div>
  );
}
