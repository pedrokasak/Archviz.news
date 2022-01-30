import { query as q } from "faunadb";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import "../../../services/fauna";
import { fauna } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        },
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const { email } = user;

      try {
        await fauna.query(
          q.Create(q.Collection("users"), {
            data: {
              email,
            },
          })
        );
        return true;
      } catch {
        return false;
      }
    },
  },
});
