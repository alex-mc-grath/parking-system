import { fetchIndividual } from './../../use-cases/individual/index.js'
import { fetchVehicle } from './../../use-cases/vehicle/index.js'
import makeGetSearch from './get-search.js'

const getSearch = makeGetSearch({ fetchIndividual, fetchVehicle })

export { getSearch }
