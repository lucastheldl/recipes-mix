import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const config = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth(config);
