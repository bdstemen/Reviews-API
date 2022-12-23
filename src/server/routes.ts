import { Router } from "express";
import controller from './controllers/index.js';
const router = Router();

// connect controller methods to their corresponding routes
router.get('/reviews', controller.getReviews);

router.post('/reviews', controller.postReview);

router.get('/reviews/meta', controller.meta);

router.put('/reviews/:review_id/report', controller.report);

router.put('/reviews/:review_id/helpful', controller.helpful);

export default router;