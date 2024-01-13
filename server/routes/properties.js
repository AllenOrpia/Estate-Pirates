import express from 'express';
import { createProperty, getAllProperties, getOneProperty } from '../controllers/properties.js';
import jwtCheck from '../config/auth0config.js';
const router = express.Router();

router.route('/create')
    .post(jwtCheck, createProperty)

router.route('/all-properties')
    .get(getAllProperties)

router.route('/:id')
    .get(getOneProperty)

export { router as propertyRoutes }