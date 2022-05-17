/*
    Input:
        makeDb [function]: returns an existing connection to DB or creates a new one
*/

export default function makeUserDb({makeDb})
{
    const find = async ({_id = null, username = null} = {}) => {

        if(_id === null && username === null)
        {
            throw new Error("_id and/or username must be present to get a user");
        }

        let searchQuery = {};
        if(_id !== null){ searchQuery["_id"] = _id }
        if(username !== null){ searchQuery["username"] = username}

        const db = await makeDb();
        const result = await db.getCollection('users').find(searchQuery);
        
        return result; //array of mongoDB documents
    }

    return Object.freeze({
        find
    });
}