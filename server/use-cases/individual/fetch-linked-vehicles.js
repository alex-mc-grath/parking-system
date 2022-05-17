export default function makeFetchLinkedVehicles({ vehicleDriverLinkDb })
{
    return async function fetchLinkedVehicles({ individualId })
    {
      if (!individualId) { throw new Error( 'individualId is a required parameter for fetchLinkedVehicles use case')}
  
      const linkedVehicles = await vehicleDriverLinkDb.findLinkedVehicles(individualId)
  
      return linkedVehicles
    }
}
  