
import {addVehicle} from '../../use-cases/vehicle/index.js'
import {fetchVehicle} from '../../use-cases/vehicle/index.js'
import makePostVehicle from './post-vehicle.js'
import makeGetVehicle from './get-vehicle.js'

const postVehicle = makePostVehicle({addVehicle});
const getVehicle = makeGetVehicle({fetchVehicle});

const vehicleController = Object.freeze({
    postVehicle,
    getVehicle
})

export default vehicleController;
export {postVehicle, getVehicle};
        