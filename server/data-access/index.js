import makeUserDb from './user-db.js'
import makeIndividualDb from './individual-db.js'
import makeVehicleDb from './vehicle-db.js'
import makeVehicleDriverLinkDb from './vehicle-driver-link-db.js'
import mongoDB from '../db/mongoDB.js'
import Id from '../util/Id/index.js'


const makeDb = async () => {

    if(!mongoDB.isConnected())
    {
        try
        {
            await mongoDB.connect()
        }
        catch(err)
        {
            throw new Error("Could not connect to DB: "+err.message)
        }
    }

    return mongoDB
}


const userDb = makeUserDb({makeDb})
const individualDb = makeIndividualDb({makeDb})
const vehicleDb = makeVehicleDb({makeDb})
const vehicleDriverLinkDb = makeVehicleDriverLinkDb({ makeDb, Id })

export { userDb, individualDb, vehicleDb, vehicleDriverLinkDb}

