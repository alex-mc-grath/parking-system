
/*export default function makeFetchVehicle({vehicleDb})
{
    return async function fetchVehicle(searchQuery)
    {
        if(searchQuery.plateNumber)
        {
            let foundVehicle = await vehicleDb.findVehicleByPlateNumber(searchQuery.plateNumber);

            if(foundVehicle.length === 0)
            {
                return null;
            }

            return foundVehicle[0];
        }
        else
        {
            throw new Error('No valid search parameters were passed to fetch a vehicle.');
        }
    }
}*/


export default function makeFetchVehicle({ vehicleDb }) {
    return async function fetchVehicle(searchQuery) {
      if (!searchQuery) {
        throw new Error('Aucun paramètre de recherche a été donné.')
      }
  
      const [
        foundVehicleByMotorNumber,
        foundVehicleByVehicleNumber,
        foundVehicleByPlateNumber,
      ] = await Promise.all([
        vehicleDb.findVehicleByMotorNumber(searchQuery),
        vehicleDb.findVehicleByVehicleNumber(searchQuery),
        vehicleDb.findVehicleByPlateNumber(searchQuery),
      ])
  
      return [
        ...foundVehicleByMotorNumber,
        ...foundVehicleByVehicleNumber,
        ...foundVehicleByPlateNumber,
      ]
    }
}
        