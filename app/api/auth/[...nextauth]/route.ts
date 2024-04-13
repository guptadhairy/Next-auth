import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
              username: { label: 'email', type: 'text', placeholder: '' },
              password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {
                console.log(credentials);
                return {
                    id: "user1",
                    name: "Dhairya"
                };
            },
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
          })
      ],
      secret: process.env.NEXTAUTH_SECRET
})

export const GET = handler;
export const POST = handler;