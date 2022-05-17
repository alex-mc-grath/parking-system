import api from '../../utils/api'

export const searchDatabase = async (query) => {
    try
    {
        const {data} = await api.get('/search/'+query);

        if(data.individuals.length === 1)
        {
            return {type: "individual", data: data.individuals[0]};
        }
        else if(data.vehicles.length === 1)
        {
            return {type: "vehicle", data: data.vehicles[0]};
        }
        else
        {
            alert("not exactly 1 match found...TODO");
        }

        return null;
    }
    catch
    {
        return {type: null}
    }
}

export const searchForLinkedDocuments = async (searchDatabaseResult) => {

    if(searchDatabaseResult.type === "individual")
    {
        const {data} = await api.get('/vehicles/from-individual/'+searchDatabaseResult.data._id);

        return data;
    }
    else if(searchDatabaseResult.type === "vehicle")
    {
        const {data} = await api.get('/individuals/from-vehicle/'+searchDatabaseResult.data._id);

        return data;
    }
}