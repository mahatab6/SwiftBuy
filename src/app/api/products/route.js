import { dbConnect, collectionName } from "@/lib/db";

export async function POST(req) {
  try {
    const data = await req.json();
    const { db } = await dbConnect();

    const result = await db.collection(collectionName.products).insertOne(data);

    return new Response(JSON.stringify({ insertedId: result.insertedId }), {
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
