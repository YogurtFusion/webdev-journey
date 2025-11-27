import { MongooseError } from "mongoose";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NextAuth_SECRET || "dev-secret",

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        const client = await mongoose.connect();
      }
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
