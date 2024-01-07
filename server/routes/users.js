import express from 'express';
const router = express.Router();
import { bookVisit, cancelBooking, createUser, getAllBookings, likeProperty, getAllFavorites } from '../controllers/users.js';

router.route('/register')
    .post(createUser)

router.route("/book-visit/:id")
    .post(bookVisit)

router.route("/all-bookings")
    .post(getAllBookings)

router.route('/cancel-booking/:id')
    .post(cancelBooking)

router.route('/favor-property/:pid')
    .post(likeProperty)

router.route('/favorite-properties')
    .post(getAllFavorites)

export { router as userRoutes };