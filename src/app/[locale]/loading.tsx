import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Image
        src="/images/loading.gif"
        width={30}
        height={30}
        alt="Loading animation"
        loading="lazy"
        className="block mx-auto"
      />
    </div>
  );
}
