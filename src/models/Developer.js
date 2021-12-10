import { Schema, model } from "mongoose";

const developerSchema = new Schema(
    {
      id: {
        type:Number
      },    
      name: {
        type: String,
        trim: true,
      },
      training: {
        type: String,
        trim: true,
      },
      job: {
        type: String,
        trim: true,
      },
      picture: {
        type: String,
        trim: true,
      }
    },
    {
      versionKey: false,
    }
  );  

  export default model("developers", developerSchema);
  