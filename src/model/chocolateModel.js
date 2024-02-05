import { Schema, mongoose } from "mongoose";
const chocolateSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number},
  grams: { type: Number},
  imageUrl: { type: String },
});
const Chocolate = mongoose.model("Chocolate", chocolateSchema);
export default Chocolate;