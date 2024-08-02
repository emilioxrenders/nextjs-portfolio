import Link from "next/link";

export default function Back() {
  return (
    <Link
      href="/"
      className="relative w-fit after:w-full after:transition-all after:duration-200 after:left-0 after:absolute after:bg-black after:h-px after:hover:w-0 after:ease-in-out after:bottom-0"
    >
      Go back
    </Link>
  );
}
