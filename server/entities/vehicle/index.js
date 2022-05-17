
import buildMakeVehicle from './vehicle.js'
import Id from '../../util/Id/index.js'
import inputValidator from './vehicle-validator.js'

const makeVehicle = buildMakeVehicle({Id, inputValidator});

export default makeVehicle;
        