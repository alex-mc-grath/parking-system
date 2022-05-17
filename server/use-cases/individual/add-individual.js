
export default function makeAddIndividual({makeIndividual, individualDb})
{
    return async function addIndividual({individualData})
    {
        const individualEntity = makeIndividual(individualData);

        const insertedId = await individualDb.insertIndividual(individualEntity);

        return insertedId;
    }
}
        