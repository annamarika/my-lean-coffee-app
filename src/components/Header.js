import Link from "next/link";

export default function Header() {
  return (
    <>
      <Link href="/">Home</Link>
      <br />
      <Link href="/create">Create</Link>
      <br />
      <Link href="/cards">Cards</Link>
    </>
  );
}
