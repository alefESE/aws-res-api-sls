import { Exception } from '@core/common/exception';
import { HttpStatusCodes } from '@core/common/code';
import { IEntity } from './IEntity';
import Joi from 'joi';

/**
 * Generic entity
 */
export class Entity<TId extends string | number> implements IEntity<TId> {
    protected id?: TId;

    getId(): TId {
        if (!this.id)
            // TODO change code 
            throw new Exception({ code: '5005', message: `${this.constructor.name}: ID is empty.` });


        return this.id;
    }

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