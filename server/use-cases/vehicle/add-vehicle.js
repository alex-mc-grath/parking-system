
export default function makeAddVehicle({makeVehicle, vehicleDb})
{
    return async function addVehicle({vehicleData})
    {
        const vehicleEntity = makeVehicle(vehicleData);

        const insertedId = await vehicleDb.insertVehicle(vehicleEntity);

        return insertedId;
    }
}
        