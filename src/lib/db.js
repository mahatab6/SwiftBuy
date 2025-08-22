import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionName = {
  products: "products",
  UserCollection: "user-collection"
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  const uri = process.env.Url_Mongodb;
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function dbConnect() {
  const client = await clientPromise;
  const db = client.db(process.env.Data_Nama);
  return { client, db };
}
