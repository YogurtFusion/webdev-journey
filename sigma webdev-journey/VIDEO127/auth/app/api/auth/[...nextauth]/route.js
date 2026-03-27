// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }


// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"


// // Configure one or more authentication providers
// const handler = NextAuth({

//     providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET,
//         }),
//         // ...add more providers here
//     ],
//     secret: process.env.NEXTAUTH_SECRET,
// })


// export { handler as Get, handler as POST } // HERE  I did Get instead of GET small e and t 