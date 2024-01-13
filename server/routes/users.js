import express from 'express';
const router = express.Router();
import { bookVisit, cancelBooking, createUser, getAllBookings, likeProperty, getAllFavorites } from '../controllers/users.js';
import jwtCheck from '../config/auth0config.js';


router.post('/register', jwtCheck, createUser)

router.route("/book-visit/:id")
    .post(jwtCheck, bookVisit)

router.route("/all-bookings")
    .post(getAllBookings)

router.route('/cancel-booking/:id')
    .post(jwtCheck, cancelBooking)

router.route('/favor-property/:pid')
    .post(jwtCheck, likeProperty)

router.route('/favorite-properties')
    .post(jwtCheck, getAllFavorites)

export { router as userRoutes };