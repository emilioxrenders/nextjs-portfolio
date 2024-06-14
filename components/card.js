import Image from 'next/image';
import Link from 'next/link';

export default function Card({ children, image, link, alt, blank }) {
    return <div className='bg-black shadow rounded hover:shadow-2xl transition-all hover:scale-105 duration-200 ease-in-out'>
            <Link href={`${link}`} className='h-full flex flex-col justify-between' target={blank && "_blank"}>
                <h2 className='p-6 text-lg text-white'>{children}</h2>
                <Image src={`/images/${image}`} className='aspect-[4/3] w-full object-center object-cover rounded-b' width={1080} height={1080} alt={alt} />
            </Link>
        </div>;
}