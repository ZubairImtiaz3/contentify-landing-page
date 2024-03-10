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
  const userIP = headers().get("x-forwarded-for")?.split(",")[0].trim();
  console.log("User's Ip", userIP);

  try {
    await connectDb();

    // Check if the user's IP is present in the last 30 minutes
    const userRecord = await DownloadModel.findOne({
      "userDownloads.ip": userIP,
      "userDownloads.timestamp": {
        $gte: new Date(Date.now() - 30 * 60 * 1000),
      },
    });

    if (!userRecord) {
      // If the user's IP is not present in the last 30 minutes, increment count
      await DownloadModel.updateOne(
        {},
        {
          $inc: { downloadCount: 1 },
          $push: { userDownloads: { ip: userIP, timestamp: new Date() } },
        }
      );
    }
  } catch (error) {
    console.error("Error incrementing download count:", error);
    throw error;
  }

  revalidatePath("/");
  revalidatePath("/install-guide");
  revalidatePath("/user-guide");
};

