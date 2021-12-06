import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const workshopSchema = new Schema(
  {
    w_id: {
      type: String,
      required: true,
      trim: true,
    },
    w_name: {
      type: String,
      trim: true,
    },
    w_address: {
      type: String,
      trim: true,
    },
    w_latitude: {
      type: String,
      trim: true,
    },
    w_longitude: {
      type: String,
      trim: true,
    },
    w_status: {
      type: String,
      trim: true,
    },
    w_quality: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

workshopSchema.plugin(mongoosePaginate);
export default model("workshops", workshopSchema);
