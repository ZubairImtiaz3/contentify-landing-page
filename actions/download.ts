"use server";
import connectDb from "@/lib/db";
import DownloadModel from "@/models/DownloadModel";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export const getDownloadCount = async () => {
  try {
    await connectDb();
    const download = await DownloadModel.findOne({});
    return {
      downloadCount: download ? download.downloadCount : 0,
    };
  } catch (error) {
    console.error("Error getting download count:", error);
    throw error;
  }
};

export const incrementCount = async () => {
  console.log(headers().get("x-forwarded-for")?.split(",")[0].trim());
  try {
    await connectDb();
    await DownloadModel.updateOne({}, { $inc: { downloadCount: 1 } });
  } catch (error) {
    console.error("Error incrementing download count:", error);
    throw error;
  }
  revalidatePath("/");
};
