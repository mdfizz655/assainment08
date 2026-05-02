import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./db";

// BetterAuth-এর জন্য ডাটাবেজ অবজেক্টটি বের করে আনা
const client = await clientPromise;
const db = client.db(); 

export const auth = betterAuth({
    database: mongodbAdapter(db), // এখানে এখন সঠিক Db অবজেক্ট যাচ্ছে
    emailAndPassword: {
        enabled: true
    },
    secret: process.env.BETTER_AUTH_SECRET,
});