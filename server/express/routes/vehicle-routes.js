
import express from 'express'
import vehicleValidation from '../validation/vehicle-validation.js'
import { postVehicle, getVehicle } from '../../controllers/vehicle/index.js'
import { getLinkedVehicles } from '../../controllers/vehicle-driver-link/index.js'

/*
    authMiddleware is an object with functions: auth, authUser, authAdmin
    makeCallBack is a function
*/
export default function makeVehicleRoutes({authMiddleware, makeCallback})
{
    const router = express.Router()


    router.post('/', authMiddleware.auth(), vehicleValidation["POST/"], makeCallback(postVehicle))
    router.get('/plateNumber/:plateNumber', authMiddleware.auth(), makeCallback(getVehicle))
    router.get('/from-individual/:individualId', /* authMiddleware.auth(), */ makeCallback(getLinkedVehicles))

    return router
}
        