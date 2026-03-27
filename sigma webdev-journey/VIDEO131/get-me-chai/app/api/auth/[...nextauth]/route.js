import { MongooseError } from "mongoose";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NextAUTH_SECRET || "dev-secret",

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        
      const userEmail = await user.email;
        const currentUser =  await User.findOne({email: email})
        if(!currentUser){
          const newUser = new User({
            email: userEmail,
            username: userEmail.split("@")[0],
          })
          await newUser.save()
          user.name = newUser.username
        }
        else{
          user.name = currentUser.username
        }
        return true
        
      }
    },
    async session({session, user, token}) {
      const dbUser  = await User.findOne({email: session.user.email})
      session.user.name = dbUser.username
      return session
    }
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
