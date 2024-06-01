import { SignInResponse } from "next-auth/react";

export type Provider = {
  onClick: () => Promise<SignInResponse | undefined>;
  icon: React.ReactNode;
  title?: string;
};

export enum Providers {
  GOOGLE = "google",
  LINKEDIN = "linkedin",
  APPLE = "apple",
  XING = "xing",
}
