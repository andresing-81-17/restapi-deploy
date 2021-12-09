import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import mongooseAutopopulate from "mongoose-autopopulate";

const workshopSchema = new Schema(
  {
    id: {
      type:Number
    },    
    name: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    latitude: {
      type: String,
      trim: true,
    },
    longitude: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
    votes: {
      type: String,
      trim: true,
    },
    services: {
      type: Array,
    },
  },
  {
    versionKey: false,
  }
);

workshopSchema.plugin(mongooseAutopopulate);
workshopSchema.plugin(mongoosePaginate);
export default model("workshops", workshopSchema);
