import mongoose from "mongoose";


const holdingSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price:  Number,
    net: String,
    day: String,
});

const Holding = mongoose.model("Holding", holdingSchema);

export default Holding;