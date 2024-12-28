import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const reportSchema = new Schema({}, { timestamps: true });

reportSchema.plugin(mongooseAggregatePaginate);

export const Report = mongoose.model("Report", reportSchema);
