import { fetchLinkedIndividuals } from '../../use-cases/vehicle/index.js'
import { fetchLinkedVehicles } from '../../use-cases/individual/index.js'
import makeGetLinkedIndividuals from './get-linked-individuals.js'
import makeGetLinkedVehicles from './get-linked-vehicles.js'

const getLinkedIndividuals = makeGetLinkedIndividuals({fetchLinkedIndividuals})
const getLinkedVehicles = makeGetLinkedVehicles({ fetchLinkedVehicles })

export { getLinkedIndividuals, getLinkedVehicles }
