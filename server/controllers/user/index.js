import makeAuthUser from './auth-user.js'
import makeGetUsers from './get-users.js'
import {fetchUsers} from '../../use-cases/user/index.js'
import {passwordManager, authManager} from '../../auth/index.js'

const authUser = makeAuthUser({fetchUsers, passwordManager, authManager});
const getUsers = makeGetUsers({fetchUsers});

export default Object.freeze({
    authUser,
    getUsers
})

export {authUser, getUsers}