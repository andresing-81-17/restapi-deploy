import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const servicesSchema = new Schema(
  {
    s_id: {
      type: String,
      required: true,
      trim: true,
    },
    s_name: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

servicesSchema.plugin(mongoosePaginate);
export default model("Services", servicesSchema);
