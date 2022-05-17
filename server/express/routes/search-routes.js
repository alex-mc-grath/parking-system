import express from 'express'
import { getSearch } from '../../controllers/search/index.js'

/*
    authMiddleware is an object with functions: auth, authUser, authAdmin
    makeCallBack is a function
*/
export default function makeVehicleRoutes({ authMiddleware, makeCallback }) {
    
  const router = express.Router()

  router.get('/:query', /* authMiddleware.auth(), */ makeCallback(getSearch));

  return router
}