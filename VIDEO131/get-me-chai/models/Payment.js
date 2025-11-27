import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
  name: { type: string, required: true },
  to_user: { type: string, required: true },
  oid: { type: string, required: true },
  message: { type: string },
  amount: { type: Number, require: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  done: { type: Boolean, default: false },
});

const Payment = model("payment", PaymentSchema);
export default mongoose.models.Payment || Payment;
