
export default function makeFetchLinkedIndividuals({ vehicleDriverLinkDb })
{
    return async function fetchLinkedIndividuals({ vehicleId })
    {
        if (!vehicleId) {throw new Error('vehicleId is a required parameter for fetchLinkedIndividuals use case')}
    
        const linkedIndividuals = await vehicleDriverLinkDb.findLinkedIndividuals(vehicleId)
    
        return linkedIndividuals
    }
}