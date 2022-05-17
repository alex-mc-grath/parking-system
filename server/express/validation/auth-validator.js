import { body } from 'express-validator'

const validations = {
    "POST/" : [
        body("user").isEmail().normalizeEmail().not().isEmpty().trim(),
        body("productName").not().isEmpty()
    ]
}

export default validations;