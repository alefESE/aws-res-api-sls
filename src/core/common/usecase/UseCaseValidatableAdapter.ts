import Joi from 'joi';
import { HttpStatusCodes } from '@core/common/code';
import { Exception } from '@core/common/exception';

/**
 * Use case adapter with validation schema
 */
export abstract class UseCaseValidatableAdapter {

    /**
     * Validate entity data
     * @param schema Joi schema to validate entity data
     */
    public async validate(schema: Joi.PartialSchemaMap): Promise<void> {
        try {
            const { warning } = await Joi.object(schema).validateAsync(this, {
                stripUnknown: true
            });
            if (!!warning) console.debug(warning.message, warning.stack);
        } catch (error) {
            throw new Exception(HttpStatusCodes.CLIENT_ERROR, error.message, error.details);
        }
    }
}