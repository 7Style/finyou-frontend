import { Providers } from "@/utils/Providers";
import { signIn, SignInResponse } from "next-auth/react";
import { FaApple, FaGoogle, FaLinkedin, FaXing } from "react-icons/fa";

type Provider = {
  onClick: () => Promise<SignInResponse | undefined>;
  icon: React.ReactNode;
  title?: string;
};

const providers: Provider[] = [
  {
    onClick: () => signIn(Providers.Google),
    icon: <FaGoogle />,
    title: "providers.google",
  },
  {
    onClick: () => signIn(Providers.LinkedIn),
    icon: <FaLinkedin />,
    title: "providers.linkedin",
  },
  {
    onClick: () => signIn(Providers.Apple),
    icon: <FaApple />,
    title: "providers.apple",
  },
  {
    onClick: () => signIn(Providers.Xing),
    icon: <FaXing />,
    title: "providers.xing",
  },
];

export { providers };
