export default function makeGetLinkedVehicles({ fetchLinkedVehicles })
{
    return async function getLinkedVehicles(httpRequest)
    {
        try
        {
            const vehicles = await fetchLinkedVehicles(httpRequest.params)
    
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: vehicles
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
                    error: e.message
                }
            }
        }
    }
}
  