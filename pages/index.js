import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/create">Create a new card</Link>
    </div>
  );
}
