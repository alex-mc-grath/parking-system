export default function makeGetSearch({ fetchIndividual, fetchVehicle })
{
    return async function getSearch(httpRequest)
    {
      
      try
      {
        const [foundIndividuals, foundVehicles] = await Promise.all([
          fetchIndividual(httpRequest.params.query),
          fetchVehicle(httpRequest.params.query),
        ]);

  
        if (foundIndividuals.length === 0 && foundVehicles.length === 0)
        {
          return {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 404,
            body: {
              error: 'Aucun individu ou vehicule a été trouver avec ce paramètre.',
            },
          };
        }
  
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          body: { individuals: foundIndividuals, vehicles: foundVehicles }
        }
      }
      catch (e)
      {
        console.log(e)
  
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 400,
          body: {
            error: e.message,
          }
        }
      }
    }
  }
  