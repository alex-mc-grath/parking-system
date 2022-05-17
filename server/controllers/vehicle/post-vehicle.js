
export default function makePostVehicle({addVehicle})
{
    return async function postVehicle(httpRequest)
    {
        try
        {
            const insertId = await addVehicle({"vehicleData": httpRequest.body});

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 201,
                body: {"vehicleObjectId": insertId}
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
        