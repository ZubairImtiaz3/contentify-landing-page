"use server";
import clientPromise from "@/lib/mongodb";
import { Db } from "mongodb";
import { revalidatePath } from "next/cache";

const client = await clientPromise;
const db: Db = client.db("linkedin-extension");

export const getDownloadCount = async () => {
  const collection = db.collection("downloads");
  const downloadCount = await collection.findOne({});

  return {
    downloadCount,
  };
};

export const incrementCount = async () => {
  const collection = db.collection("downloads");

  //increment the downloadCount by 1
  await collection.updateOne({}, { $inc: { downloadCount: 1 } });

  revalidatePath("/");
};
