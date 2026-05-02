import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL as string;

if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URL"');
}

const client = new MongoClient(uri);
const clientPromise = client.connect();

export default clientPromise;