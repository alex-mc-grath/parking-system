
export default function makeIndividualDb({makeDb})
{
    const insertIndividual = async (individualEntity) => {

        if(!individualEntity) throw new Error('insertIndividual from individual-db requires a individualEntity parameter');

        const db = await makeDb();
        
        let insertResult = await db.getCollection('individuals').insert({
            "_id": individualEntity.getId(),
            "firstName": individualEntity.getFirstName(),
            "lastName": individualEntity.getLastName(),
            "driverLicenseNumber": individualEntity.getDriverLicenseNumber(),
            "gouvId": individualEntity.getGouvId(),
            "birthDate": individualEntity.getBirthDate(),
            "phoneNumbers": individualEntity.getPhoneNumbers(),
            "address": individualEntity.getAddress(),
            "city": individualEntity.getCity(),
            "country": individualEntity.getCountry(),
            "notes": individualEntity.getNotes()
        });

        return insertResult.insertedId;
    }


    const findIndividualByGouvId = async (gouvId) => {
        if(!gouvId) throw new Error('findIndividualByGouvId from individual-db requires a gouvId parameter');

        const db = await makeDb();

        return await db.getCollection('individuals').find({"gouvId" : gouvId});
    }

    const findIndividualByDriverLicenseNumber = async (driverLicenseNumber) => {
        if (!driverLicenseNumber) {throw new Error('findIndividualByDriverLicenseNumber from individual-db requires a driverLicenseNumber parameter')}

        const db = await makeDb();
    
        return await db.getCollection('individuals').find({"driverLicenseNumber" : driverLicenseNumber});
    }

    const findIndividualByPhone = async (phoneNumber) => {
        if(!phoneNumber){ throw new Error('findIndividualByPhone from individual-db requires a phoneNumber parameter') }
    
        const db = await makeDb();
    
        let byPhoneNumbers = await db.getCollection('individuals').find({"phoneNumbers.home" : phoneNumber});
        let byCellNumbers = await db.getCollection('individuals').find({"phoneNumbers.cell" : phoneNumber});
    
        return [...byPhoneNumbers, ...byCellNumbers];
    
    }

    return Object.freeze({
        insertIndividual,
        findIndividualByGouvId,
        findIndividualByDriverLicenseNumber,
        findIndividualByPhone
    });
}
        