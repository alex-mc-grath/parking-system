export default function makeGetIndividual ({fetchIndividual})
{
    return async function getIndividual(httpRequest)
    {
        try
        {
            const individualData = await fetchIndividual(httpRequest.params);

            if(individualData === null)
            {
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 404,
                    body: {"error": "No individuals were found."}
                }
            }
            

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {...individualData}
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