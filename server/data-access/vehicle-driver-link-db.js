export default function makeVehicleDriverLinkDb({ makeDb, Id })
{
    const findLinkedIndividuals = async (vehicleId) => {

        if(!vehicleId) throw new Error('findLinkedIndividuals from vehicleDriverLinkDb requires the vehicleId parameter');
    
        const db = await makeDb();
    
        const links = await db.getCollection('vehicleDriverLink').aggregate([
            {$match:{"vehicleId": Id.convertToObjectID(vehicleId)}},
            {$lookup:{"from":"individuals", "localField":"individualId", "foreignField":"_id", "as":"individual"}}
        ])
    
        const individuals = links.map(link => { return { ...link.individual[0], owner: link.owner} })

        return individuals
    }
  

    const findLinkedVehicles = async (individualId) => {

        if(!individualId) throw new Error('findLinkedIndividuals from vehicleDriverLinkDb requires the individualId parameter');
    
        const db = await makeDb();
    
        const links = await db.getCollection('vehicleDriverLink').aggregate([
            {$match:{"individualId": Id.convertToObjectID(individualId)}},
            {$lookup:{"from":"vehicles", "localField":"vehicleId", "foreignField":"_id", "as":"vehicle"}}
        ])
    
        const vehicles = links.map(link => { return { ...link.vehicle[0], owner: link.owner } })

        return vehicles
    }
  
    return Object.freeze({
      findLinkedIndividuals,
      findLinkedVehicles
    })
}
  