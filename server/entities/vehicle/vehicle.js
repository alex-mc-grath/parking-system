
export default function buildMakeVehicle({Id, inputValidator})
{
    return function makeVehicle(data = {}){
        const {
            _id = Id.makeId(),
            brand,
            model,
            assemblyDate,
            color,
            motorNumber,
            vehicleNumber,
            vehicleType,
            plateNumber
        } = data;

        if(!Id.isValidId(_id))
        {
            throw new Error('Vehicle must have a valid ID.');
        }

        const [hasErrors, errorList] = inputValidator.validate(data);
        if(hasErrors)
        {
            throw new Error(errorList.join(' | '));
        }

        return Object.freeze({
            getId: () => _id,
            getBrand: () => brand,
            getModel: () => model,
            getAssemblyDate: () => assemblyDate,
            getColor: () => color,
            getMotorNumber: () => motorNumber,
            getVehicleNumber: () => vehicleNumber,
            getVehicleType: () => vehicleType,
            getPlateNumber: () => plateNumber
        });
    }
}
        