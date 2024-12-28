import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const goalSchema = new Schema({}, { timestamps: true });

goalSchema.plugin(mongooseAggregatePaginate);

export const Goal = mongoose.model("Goal", goalSchema);
