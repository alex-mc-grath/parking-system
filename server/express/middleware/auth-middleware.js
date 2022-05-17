export default function makeAuthMiddleware(authenticator)
{
    const auth = (accountType) => { 

        return function (req, res, next)
        {
            try
            {
                let token = req.header('Authorization');
                if(!token)
                {
                    res.status(401).json({"error": "Authorization header is required for authentication"});
                    return;
                }

                if(token.substr(0,7) !== "Bearer ")
                {
                    res.status(401).json({"error": "Authorization header has a wrong format"});
                    return;
                }

                token = token.substr(7);

                const authData = authenticator.authenticate(token);

                if(accountType && authData.accountType !== accountType)
                {
                    res.status(401).json({"error":"This request is reserved for accounts of type "+accountType});
                }

                req.auth = authData;

                next();
            }
            catch(err)
            {
                res.status(401).json({"error":err.message});
            }  
        }
    }


    return Object.freeze({
        auth: () => auth(null),
        authUser: () => auth("USER"),
        authAdmin: () => auth("ADMIN")
    });
}
