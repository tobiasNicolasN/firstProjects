import mongoose, { Document } from "mongoose";

export interface IItem extends Document {
  amount: number;
  name: string;
  date: string;
}

const ItemSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  name: { type: String, required: true },
  date: String,
});

export default mongoose.model<IItem>("Item", ItemSchema);
