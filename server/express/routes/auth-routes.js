import express from 'express';
import authValidation from '../validation/auth-validator.js';
import {
    authUser
} from '../../controllers/user/index.js'

export default function makeAuthRoutes({makeCallback})
{
    const router = express.Router();

    router.post('/login', authValidation["POST/"], makeCallback(authUser));

    return router;
}