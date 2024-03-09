import { Schema, model, Document, models } from "mongoose";

interface Download extends Document {
  downloadCount: number;
  userDownloads: Array<{ ip: string; timestamp: Date }>;
}

const downloadSchema = new Schema({
  downloadCount: {
    type: Number,
    default: 0,
  },
  userDownloads: [
    {
      ip: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        required: true,
      },
    },
  ],
});

const DownloadModel =
  models.Download || model<Download>("Download", downloadSchema);

export default DownloadModel;
