import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-beige w-full flex justify-center items-center py-4 font-display font-light">
      <Link href="/" className="w-fit font-light tracking-wider">
        Emilioxrenders
      </Link>
    </div>
  );
}
