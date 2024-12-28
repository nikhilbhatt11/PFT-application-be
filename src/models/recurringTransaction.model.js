import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const recurringTransactionSchema = new Schema({}, { timestamps: true });

recurringTransactionSchema.plugin(mongooseAggregatePaginate);

export const RecurringTransaction = mongoose.model(
  "RecurringTransaction",
  recurringTransactionSchema
);
