const express = require('express');
const router = express.Router();

const { addReview, getReviewByProduct, updateReview, deleteReview } = require('../controllers/Review.controller');

router.route('/add-review').post(addReview);
router.route('/get-review/:id').get(getReviewByProduct);
router.route('/update-review/:id').put(updateReview);
router.route('/delete-review/:id').delete(deleteReview);

module.exports = router;
