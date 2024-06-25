import CredentialsProvider from 'next-auth/providers/credentials';
import { login } from "@/hooks/auth/index";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials: Partial<Record<"username" | "password", unknown>> | undefined): Promise<any> {
        try {
          if (!credentials || typeof credentials.username !== 'string' || typeof credentials.password !== 'string') {
            throw new Error("Invalid credentials");
          }

          const resp = await login({
            username: credentials.username,
            password: credentials.password,
          });

          const { data } = resp;
          return {
            token: data.access_token,
            user: credentials
          };
        } catch (e: any) {
          return Promise.reject(new Error(e?.message || "Something Wrong"));
        }
      }

    })
  ],
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
  },
  callbacks: {
    async signIn({ user }: any) {
      if (user?.token) {
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    },
    async session({ session, token }: any) {
      if (!token.token) {
        return Promise.resolve(session);
      }

      session.token = token.token;
      session.user = token.user;

      return Promise.resolve(session);
    },
    async jwt({ token, user }: any) {
      if (user?.token) {
        token = {
          token: user.token,
          user: user,
        };
      }

      // if (token.token && !token.user) {
      //   token.user = await getUser(token.token as string);
      // }

      return token
    },
  },
};

