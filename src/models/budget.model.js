import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const budgetSchema = new Schema({}, { timestamps: true });

budgetSchema.plugin(mongooseAggregatePaginate);

export const Budget = mongoose.model("Budget", budgetSchema);
