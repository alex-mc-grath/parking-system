
import express from 'express';
import individualValidation from '../validation/individual-validation.js'
import {
    postIndividual,
    getIndividual
} from '../../controllers/individual/index.js'
import { getLinkedIndividuals } from '../../controllers/vehicle-driver-link/index.js'

/*
    authMiddleware is an object with functions: auth, authUser, authAdmin
    makeCallBack is a function
*/
export default function makeIndividualRoutes({authMiddleware, makeCallback})
{
    const router = express.Router();


    router.post('/', authMiddleware.auth(), individualValidation["POST/"], makeCallback(postIndividual))
    router.get('/gouv-id/:gouvId', makeCallback(getIndividual))
    router.get('/from-vehicle/:vehicleId', /* authMiddleware.auth(), */ makeCallback(getLinkedIndividuals))

    return router
}
        