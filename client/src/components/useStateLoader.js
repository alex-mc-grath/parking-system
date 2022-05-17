import {useState} from 'react';

import LoadSpinner from './theme/Loader'

export default function useStateLoader({action, callback = null})
{
    const [data,setData] = useState(null)
    const [loading, setLoading] = useState(false);

    const load = async (params) => {
        try
        {
            setLoading(true)

            let data = await action(params);
            setData(data);

            setLoading(false)

            if(callback)
            {
                callback(data);
            }
        }
        catch(error)
        {
            setData(null)
            setLoading(false)
            throw error
        }
    }

    const Loader = ({children}) => {
        if(loading)
        {
            return (<LoadSpinner />)
        }
        else
        {
            if(data === null)
            {
                return (<></>)
            }
            else
            {
                return (<>{children}</>)
            }
        }
    }

    return [data, load, Loader]
}