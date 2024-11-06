const mongoose = require('mongoose');

const orderFormSchema = new mongoose.Schema({
    mintCommemorativeStamps: {
        type: Number,
        default: 0
    },
    mintCommemorativeStampsWithoutPersonalities: {
        type: Number,
        default: 0
    },
    mintDefinitiveStamps: {
        type: Number,
        default: 0
    },
    topMarginalBlock: {
        type: Number,
        default: 0
    },
    bottomMarginalBlock: {
        type: Number,
        default: 0
    },
    fullSheet: {
        type: Number,
        default: 0
    },
    firstDayCovers: {
        type: Number,
        default: 0
    },
    firstDayCoversWithoutPersonalities: {
        type: Number,
        default: 0
    },
    firstDayCoversBlank: {
        type: Number,
        default: 0
    },
    informationBrochure: {
        type: Number,
        default: 0
    },
    informationBrochureBlank: {
        type: Number,
        default: 0
    },
    annualStampPack: {
        type: Number,
        default: 0
    },
    specialAnnualStampPack: {
        type: Number,
        default: 0
    },
    childrenAnnualStampPack: {
        type: Number,
        default: 0
    },
    firstDayCoverPack: {
        type: Number,
        default: 0
    },
    postalStationery: {
        type: Number,
        default: 0
    },
    miniSheet: {
        type: Number,
        default: 0
    },
    otherItems: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("OrderForm", orderFormSchema);
