const mongoose = require('mongoose');

const PDASchema = new mongoose.Schema({
    customerType: {
        type: String,
        enum: ["private","dealer","company"],
        default: null
    },
    applicantName: {
        type: String,
        required: true,
        trim: true
    },
    mailingAddress: {
        type: String,
        required: true,
        trim: true
    },
    pin: {
        type: String,
        required: true,
        trim: true
    },
    recipientName: {
        type: String,
        required: true,
        trim: true
    },
    recipientMailingAddress: {
        type: String,
        required: true,
        trim: true
    },
    recipientPin: {
        type: String,
        required: true,
        trim: true
    },
    subscriptionFrequency: {
        type: String,
        enum: ["once","twice","four","six"],
        default: null
    },
    orderform: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderForm",
        default: null
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("PDA", PDASchema);
