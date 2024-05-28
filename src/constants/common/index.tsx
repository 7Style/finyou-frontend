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
    onClick: () => signIn(Providers.GOOGLE),
    icon: <FaGoogle />,
    title: "providers.google",
  },
  {
    onClick: () => signIn(Providers.LINKEDIN),
    icon: <FaLinkedin />,
    title: "providers.linkedin",
  },
  {
    onClick: () => signIn(Providers.APPLE),
    icon: <FaApple />,
    title: "providers.apple",
  },
  {
    onClick: () => signIn(Providers.XING),
    icon: <FaXing />,
    title: "providers.xing",
  },
];

export { providers };
