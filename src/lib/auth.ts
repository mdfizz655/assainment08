import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./db";

export const auth = betterAuth({
    database: mongodbAdapter(await clientPromise.then(c => c.db())),
    emailAndPassword: {
        enabled: true
    },
    secret: process.env.BETTER_AUTH_SECRET,
});