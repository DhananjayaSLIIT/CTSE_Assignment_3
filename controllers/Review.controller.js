const Review = require('../models/Review.model');

exports.addReview = async (req, res) => {

    //TODO: change the product ID
    const productId = "ff125sd1d8w1d31d3a4da3da";

    let newReview = {
        productID:productId,
        rating:req.body.rating,
        review:req.body.review
    }

    const review = new Review(newReview);

    try {
        await review.save().then(()=>{
            res.status(201).send({
                success:true,
                message:"Review added successfully !"
            })
        })
    }catch (e) {
        res.status(500).send({
            success:false,
            message:e.message
        })
    }
}

exports.getReviewByProduct = async (req, res) => {

    //TODO: change the product ID
    const productId = "ff125sd1d8w1d31d3a4da3da";

    try{
        await Review.find({productID:productId}).then(data =>{
            res.status(200).send({
                success:true,
                data:data
            })
        })
    }catch (e) {
        res.status(500).send({
            success:false,
            message:e.message
        })
    }
}

exports.updateReview = async  (req, res) => {
    try{
        await Review.findByIdAndUpdate(req.params.id,{rating:req.body.rating, review:req.body.review}).then(() => {
            res.status(200).send({
                success:true,
                message:"Review updated successfully !"
            })
        })
    }catch (e) {
        res.status(500).send({
            success:false,
            message:e.message
        })
    }
}

exports.deleteReview = async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id).then(()=>{
            res.status(200).send({
                success:true,
                message:"Review delete successfully !"
            })
        })
    }catch (e) {
        res.status(500).send({
            success:false,
            message:e.message
        })
    }
}