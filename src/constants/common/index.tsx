import { Provider, Providers } from "@/types/providers";
import { signIn } from "next-auth/react";
import { FaApple, FaGoogle, FaLinkedin, FaXing } from "react-icons/fa";

const providers: Provider[] = [
  {
    onClick: () => signIn(Providers.GOOGLE),
    icon: <FaGoogle />,
    title: "google",
  },
  {
    onClick: () => signIn(Providers.LINKEDIN),
    icon: <FaLinkedin />,
    title: "linkedin",
  },
  {
    onClick: () => signIn(Providers.APPLE),
    icon: <FaApple />,
    title: "apple",
  },
  {
    onClick: () => signIn(Providers.XING),
    icon: <FaXing />,
    title: "xing",
  },
];

export { providers };
