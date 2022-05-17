
/*export default function makeFetchIndividual({individualDb})
{
    return async function fetchIndividual(searchQuery)
    {
        console.log("searchQuery",searchQuery);
        if(searchQuery.gouvId)
        {
            let foundIndividual = await individualDb.findIndividualByGouvId(searchQuery.gouvId);

            if(foundIndividual.length === 0)
            {
                return null;
            }

            return foundIndividual[0];
        }
        else
        {
            throw new Error('No valid search parameters were passed to fetch an individual.');
        }
    }
}*/
        

export default function makeFetchIndividual({ individualDb }) {
    return async function fetchIndividual(searchQuery) {
      if (!searchQuery) {
        throw new Error('Aucun paramètre de recherche a été donné.')
      }
  
      const [
        foundIndividualsByGouvId,
        foundIndividualsByDriverLicense,
        foundIndividualsByPhone,
      ] = await Promise.all([
        individualDb.findIndividualByGouvId(searchQuery),
        individualDb.findIndividualByDriverLicenseNumber(searchQuery),
        individualDb.findIndividualByPhone(searchQuery)
      ])
  
      return [
        ...foundIndividualsByDriverLicense,
        ...foundIndividualsByGouvId,
        ...foundIndividualsByPhone,
      ]
    }
  }