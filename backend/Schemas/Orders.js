import mongoose from "mongoose";


const ordersSchema = new mongoose.Schema({
  
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

const Order = mongoose.model("Order", ordersSchema);

export default Order;