import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function isAuthServer() {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get("token")?.value;

    if (!token) {
      console.log("No token found in cookies");
      return {
        isAuthenticated: false,
        user: null,
      };
    }

    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || "your-secret-key"
    );

    try {
      const { payload } = await jwtVerify(token, secret);

      return {
        isAuthenticated: true,
        user: {
          id: payload.userId as string,
          email: payload.email as string,
        },
      };
    } catch (verifyError) {
      console.error("Token verification error:", verifyError);
      return {
        isAuthenticated: false,
        user: null,
      };
    }
  } catch (error) {
    console.error("Unexpected error in isAuthServer:", error);
    return {
      isAuthenticated: false,
      user: null,
    };
  }
}
