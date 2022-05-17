export default function makeGetLinkedIndividuals({ fetchLinkedIndividuals })
{
    return async function getLinkedIndividuals(httpRequest)
    {
        try
        {
            const individuals = await fetchLinkedIndividuals(httpRequest.params)
    
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 200,
                body: individuals
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
  