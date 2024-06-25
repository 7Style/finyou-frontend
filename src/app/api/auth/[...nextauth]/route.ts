import NextAuth from 'next-auth'
import { authOptions } from './auth' // Ensure the path is correct

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
