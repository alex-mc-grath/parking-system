import makeAddIndividual from './add-individual.js'
import makeFetchIndividual from './fetch-individual.js'
import makeFetchLinkedVehicles from './fetch-linked-vehicles.js'
import {individualDb, vehicleDriverLinkDb} from '../../data-access/index.js'
import makeIndividual from '../../entities/individual/index.js'

const addIndividual = makeAddIndividual({makeIndividual, individualDb})
const fetchIndividual = makeFetchIndividual({individualDb})
const fetchLinkedVehicles = makeFetchLinkedVehicles({ vehicleDriverLinkDb })

export {
    addIndividual,
    fetchIndividual, 
    fetchLinkedVehicles
}