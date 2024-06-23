import { InnerLayoutProps } from "@/types/auth";
import Link from "next/link";
export const InnerLayout: React.FC<InnerLayoutProps> = ({
  title,
  description,
  linkText,
  cta,
  children
}) => {
  return (
    <>
      <div className="grid gap-6 md:gap-16">
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          {description && <p className="text-base text-black pt-2">{description}</p>}
        </div>

        {children}
      </div>

      <div className="text-base text-neutral-500 font-medium pt-10">
        {linkText}{" "}
        <Link href="/signin" className="text-teal-600">
          {cta}
        </Link>
      </div>
    </>
  )
}
