import mongoose from "mongoose"

const schema = new mongoose.Schema({
    amount: Number,
    date: Date
})

const model = mongoose.model("Record",
                             schema,
                             "records")

export default model