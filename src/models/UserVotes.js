import { Schema, model } from "mongoose";

const userVotesSchema = new Schema(
    {
        workshopId: {
            type: Number,
            trim: true
        },
        userId: {
            type: Number,
            trim: true
        },
        vote: {
            type: Number,
            trim: true
        },
        typeVote: {
            type: Boolean,
            trim: true
        }
    },
    {
        versionKey: false,
    }
    
);
export default model("uservotes", userVotesSchema);