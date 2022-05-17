import makeAddVehicle from './add-vehicle.js'
import makeFetchVehicle from './fetch-vehicle.js'
import makeFetchLinkedIndividuals from './fetch-linked-individuals.js'
import {vehicleDb, vehicleDriverLinkDb} from '../../data-access/index.js'
import makeVehicle from '../../entities/vehicle/index.js'

const addVehicle = makeAddVehicle({makeVehicle, vehicleDb});
const fetchVehicle = makeFetchVehicle({vehicleDb});
const fetchLinkedIndividuals = makeFetchLinkedIndividuals({ vehicleDriverLinkDb });

export {
    addVehicle,
    fetchVehicle,
    fetchLinkedIndividuals
}