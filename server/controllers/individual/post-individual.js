
export default function makePostIndividual ({addIndividual})
{
    return async function postIndividual(httpRequest)
    {
        try
        {
            const insertId = await addIndividual({"individualData": httpRequest.body});

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 201,
                body: {"individualObjectId": insertId}
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
        