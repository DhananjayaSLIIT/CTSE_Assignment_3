const Mongoose = require('mongoose');

const ReviewSchema = new Mongoose.Schema({
    productID : {
        type : String,
        required: true
    },
    rating : {
        type : Number,
        required: true
    },
    review : {
        type : String,
        required: true
    }
});

const Review = Mongoose.model('Reviews',ReviewSchema);
module.exports = Review;