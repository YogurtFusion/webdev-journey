// app/api/genrate/route.js
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();                      // parse incoming JSON
    const shorturl = body.shorturl ?? body.short;           // accept both "shorturl" and "short"
    const url = body.url;

    if (!url || !shorturl) {
      return NextResponse.json(
        { success: false, error: true, message: "Missing url or shorturl" },
        { status: 400 }
      );
    }

    const client = await clientPromise;                     // reuse cached client
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // check if shorturl already exists
    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return NextResponse.json(
        { success: false, error: true, message: "URL already exists!" },
        { status: 409 }                                     // conflict
      );
    }

    // insert the doc
    const result = await collection.insertOne({
      url,
      shorturl,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, error: false, message: "URL generated successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: true, message: err.message }, { status: 500 });
  }
}
