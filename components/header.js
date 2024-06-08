import Link from 'next/link';

export default function Header() {
    return <div className="bg-black w-full flex justify-center items-center py-4"><Link href='/' className="text-white w-fit font-extralight tracking-wide">Emilioxrenders</Link></div>;
}