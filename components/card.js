import Image from "next/image";
import Link from "next/link";

export default function Card({ children, image, link, alt, blank }) {
  return (
    <div className="bg-white shadow rounded-sm hover:shadow-2xl transition-all duration-200 ease-in-out hover:scale-105">
      <Link
        href={`${link}`}
        className="h-full flex flex-col justify-between text-center"
        target={blank && "_blank"}
      >
        <Image
          src={`/images/${image}`}
          className="aspect-[4/3] w-full object-center object-cover rounded-t-sm"
          width={1080}
          height={1080}
          alt={alt}
        />
        <div className="h-full flex justify-center items-center">
          <h2 className="p-8 text-lg">{children}</h2>
        </div>
      </Link>
    </div>
  );
}
