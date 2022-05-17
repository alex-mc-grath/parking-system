
import {addIndividual} from '../../use-cases/individual/index.js'
import {fetchIndividual} from '../../use-cases/individual/index.js'
import makePostIndividual from './post-individual.js'
import makeGetIndividual from './get-individual.js'

const postIndividual = makePostIndividual({addIndividual});
const getIndividual = makeGetIndividual({fetchIndividual});

const individualController = Object.freeze({
    postIndividual,
    getIndividual
})

export default individualController;
export {postIndividual, getIndividual};
        