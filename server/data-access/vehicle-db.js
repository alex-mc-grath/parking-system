
export default function makeVehicleDb({makeDb})
{
    const insertVehicle = async (vehicleEntity) => {

        if(!vehicleEntity) throw new Error('insertVehicle from vehicle-db requires a vehicleEntity parameter');

        const db = await makeDb();
        
        let insertResult = await db.getCollection('vehicles').insert({
            "_id": vehicleEntity.getId(),
            "brand": vehicleEntity.getBrand(),
            "model": vehicleEntity.getModel(),
            "assemblyDate": vehicleEntity.getAssemblyDate(),
            "color": vehicleEntity.getColor(),
            "motorNumber": vehicleEntity.getMotorNumber(),
            "vehicleNumber": vehicleEntity.getVehicleNumber(),
            "vehicleType": vehicleEntity.getVehicleType(),
            "plateNumber": vehicleEntity.getPlateNumber()
        });

        return insertResult.insertedId;
    }


    const findVehicleByPlateNumber = async (plateNumber) => {
        if(!plateNumber) throw new Error('findVehicleByPlateNumber from vehicle-db requires a plateNumber parameter');

        const db = await makeDb()

        return await db.getCollection('vehicles').find({"plateNumber" : plateNumber});
    }


    const findVehicleByVehicleNumber = async (vehicleNumber) => {
        if(!vehicleNumber){ throw new Error('findVehicleByVehicleNumber from vehicle-db requires a vehicleNumber parameter') }
    
        const db = await makeDb()
    
        return await db.getCollection('vehicles').find({"vehicleNumber" : vehicleNumber})
    }


    const findVehicleByMotorNumber = async (motorNumber) => {
        if(!motorNumber){ throw new Error('findVehicleByMotorNumber from vehicle-db requires a motorNumber parameter') }
    
        const db = await makeDb()
    
        return await db.getCollection('vehicles').find({"motorNumber" : motorNumber})
    }


    return Object.freeze({
        insertVehicle,
        findVehicleByPlateNumber,
        findVehicleByVehicleNumber,
        findVehicleByMotorNumber
    });
}
        