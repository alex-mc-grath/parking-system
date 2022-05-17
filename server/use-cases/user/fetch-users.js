import makeUser from '../../entities/user/index.js'

//userDb: {find}
export default function makeFetchUsers ({userDb, Id})
{
    /* foodEntryData
        {_id (optional), email (optional)}
    */
    return async function fetchUsers({_id = null, username = null} = {})
    {
        const fetchedUsersByQuery = await userDb.find({_id: _id ? Id.convertToObjectID(_id) : null, username});
        
        return fetchedUsersByQuery;
    }
}