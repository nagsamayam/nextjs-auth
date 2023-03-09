import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.OAUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET as string,
    }),
    // Github Provider
    GitHubProvider({
      clientId: process.env.OAUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_GITHUB_CLIENT_SECRET as string,
    }),
  ],
});
