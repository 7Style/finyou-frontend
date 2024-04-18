
import service from "@/service";

// Login
export async function login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    return service({
      method: "POST",
      noAuth: true,
      url: `/auth/email/login`,
      body: {
        email,
        password,
      },
    });
  }
  
  export async function getUser(token: string) {
    return service({
      method: "GET",
      url: "/auth/me",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  export async function refreshToken(token: string) {
    return service({
      method: "POST",
      url: "/auth/refresh",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }