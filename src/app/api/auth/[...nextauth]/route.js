import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { LoginApi } from "../login/route"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
  CredentialsProvider({
    name: 'Credentials',

    async authorize(credentials, req) {
      const user = await LoginApi(credentials);

      if ( user) {
        return user
      }
      return null
    }
  })
],
pages:{
    signIn: '/login'
}

}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }