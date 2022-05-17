import jwt from 'jsonwebtoken'

export default function makeJWTAuth(config)
{
    
    const makeAuthToken = ({_id = null, accountType = null} = {}) => {

        //validate input
        if(!_id){throw new Error('_id is required when creating an auth token')}
        if(!accountType){throw new Error('accountType is required when creating an auth token')}
        if( (['USER','ADMIN']).indexOf(accountType) < 0 ){throw new Error('accountType is invalid for authentication')}

        //create token
        let token = jwt.sign({_id, accountType}, config.getAuthSecret(), {
            "expiresIn": config.getSessionExpireTime()
        });

        return token;
    }


    const authenticate = (token) => {

        let verified = null;

        try
        {
            verified = jwt.verify(token,config.getAuthSecret());
        }
        catch(err)
        {
            throw new Error('Failed to authenticate the user');
        }

        if(!verified._id || !verified.accountType)
        {
            throw new Error("JWT token has the wrong structure");
        }

        return Object.freeze({
            _id: verified._id,
            accountType: verified.accountType
        });
        
    }

    
    return Object.freeze({
        makeAuthToken,
        authenticate
    })
}