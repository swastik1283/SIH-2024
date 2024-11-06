const PDA = require("../models/PDA");
const OrderForm = require("../models/OrderForm");

exports.saveinfo = async (req, res, next) => 
{
    try {
        const { customerType, applicantName, mailingAddress, pin, recipientName, recipientMailingAddress, recipientPin, subscriptionFrequency, date, orderform } = req.body.PDAformData;

        console.log("NAME:",orderform);

        let orderFormObj;
        if (orderform){
            // Creating the order form with provided data
            orderFormObj = await OrderForm.create(orderform);
        } else {
            // Creating an empty order form
            orderFormObj = await OrderForm.create({});
        }

        const PDAObj = await PDA.create({
            customerType,
            applicantName,
            mailingAddress,
            pin,
            recipientName,
            recipientMailingAddress,
            recipientPin,
            subscriptionFrequency,
            orderform: orderFormObj._id,
            date
        });

        res.status(200).json({
            success: true,
            data: PDAObj,
            message: 'PDA info saved successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to save info. Please try again',
            error: error.message,
        });
    }
};
