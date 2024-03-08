import { Schema, model, Document } from "mongoose";

interface Download extends Document {
  downloadCount: number;
}

const downloadSchema = new Schema({
  downloadCount: {
    type: Number,
  },
});

const DownloadModel = model<Download>("Download", downloadSchema);

export default DownloadModel;
