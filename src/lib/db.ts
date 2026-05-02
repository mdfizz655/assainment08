import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;

if (!uri) {
    console.error("❌ MONGODB_URL IS MISSING IN ENV FILE!");
    throw new Error('MONGODB_URL is missing');
}

const client = new MongoClient(uri);

const clientPromise = client.connect()
    .then(c => {
        console.log("✅ MongoDB Connected Successfully!");
        return c;
    })
    .catch(err => {
        console.error("❌ MongoDB Connection Error:", err.message);
        throw err;
    });

export default clientPromise;