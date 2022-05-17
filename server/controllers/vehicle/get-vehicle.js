export default function makeGetVehicle({fetchVehicle})
{
    return async function getVehicle(httpRequest)
    {
        try
        {
            const vehicleData = await fetchVehicle(httpRequest.params);

            if(vehicleData === null)
            {
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 404,
                    body: {"error": "No vehicles were found."}
                }
            }
            

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {...vehicleData}
            }
        }
        catch(e)
        {
            console.log(e);

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