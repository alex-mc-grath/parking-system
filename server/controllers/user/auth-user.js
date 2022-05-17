export default function makeAuthUser ({fetchUsers, passwordManager, authManager})
{
    return async function authUser(httpRequest)
    {
        try
        {
            const users = await fetchUsers(httpRequest.body);

            if(users.length == 0)
            {
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 401,
                    body: {code: "AUTH_ERROR", error: "Invalid username or password"}
                }
            }

            if(users.length > 1)
            {
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 401,
                    body: {code: "AUTH_ERROR", error: "Several users were found with this email."}
                }
            }


            const user = users[0];

            if(!passwordManager.verify(httpRequest.body.password, user.password))
            {
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 401,
                    body: {code: "AUTH_ERROR", error: "Invalid username or password"}
                }
            }


            const authToken = authManager.makeAuthToken({"_id": user._id, "accountType":user.accountType});


            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {token: authToken}
            }
        }
        catch(e)
        {
            console.log(e);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    code: e.stack.split(":")[0],
                    error: e.message
                }
            }
        }
    }
}