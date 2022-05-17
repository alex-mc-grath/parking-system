
import Joi from 'joi';

const validate = (data) => {
    const JoiSchema = Joi.object({
        "brand": Joi.string().trim(),
        "model": Joi.string().trim(),
        "assemblyDate": Joi.string().trim(),
        "color": Joi.string().trim(),
        "motorNumber": Joi.string().trim(),
        "vehicleNumber": Joi.string().trim(),
        "vehicleType": Joi.string().trim(),
        "plateNumber": Joi.string().trim()
    }).options({abortEarly: false});

    const response = JoiSchema.validate(data);

    if(response.error)
    {
        return [true, response.error.details.map(err => err.message)];
    }
    else
    {
        return [false, []];
    }
}

const vehicleValidator = Object.freeze({
    validate
});

export default vehicleValidator;
        