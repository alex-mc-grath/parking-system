import express from 'express'
import makeCallback from './express-callback.js'
import makeAuthMiddleware from './middleware/auth-middleware.js'
import makeAuthRoutes from './routes/auth-routes.js'
import makeUserRoutes from './routes/user-routes.js'
import makeIndividualRoutes from './routes/individual-routes.js'
import makeVehicleRoutes from './routes/vehicle-routes.js'
import makeSearchRoutes from './routes/search-routes.js'
import { authManager } from '../auth/index.js'


export default function makeServer({config = null} = {})
{
    const app = express()
    const port = config.getPort() || 5000

    const authMiddleware = makeAuthMiddleware(authManager)

    app.use(express.json())


    app.use("/api/auth", makeAuthRoutes({makeCallback}))
    app.use("/api/users", makeUserRoutes({authMiddleware, makeCallback}))
    app.use("/api/vehicles", makeVehicleRoutes({authMiddleware, makeCallback}))
    app.use("/api/individuals", makeIndividualRoutes({authMiddleware, makeCallback}))
    app.use("/api/search", makeSearchRoutes({authMiddleware, makeCallback}))
    


    app.listen(port, () => console.log("Server started on port "+port))

    return app
}