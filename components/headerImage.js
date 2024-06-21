import Image from "next/image";

export default function HeaderImage({ image, alt }) {
  return (
    <Image
      src={`/images/${image}`}
      className="w-full h-52 lg:h-72 object-center object-cover shadow rounded-sm"
      width={1080}
      height={1080}
      alt={alt}
    />
  );
}
