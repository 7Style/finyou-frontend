import Image from "next/image";

export default function Loading() {
    // Or a custom loading skeleton component
    return <div className="h-screen flex justify-center items-center">
        <Image src="/loading.gif" width={120} height={30} alt="logo" />
    </div>
}