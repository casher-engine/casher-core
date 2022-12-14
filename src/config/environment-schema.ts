import * as Joi from 'joi';

export const EnvironmentSchema = Joi.object({
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().default(3000),

  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_DB: Joi.string().required(),
  DATABASE_SCHEMA: Joi.string().required(),

  JWT_ADMIN_ACCESS_SECRET: Joi.string().required(),
  JWT_ADMIN_REFRESH_SECRET: Joi.string().required(),

  JWT_CLIENT_ACCESS_SECRET: Joi.string().required(),
  JWT_CLIENT_REFRESH_SECRET: Joi.string().required(),

  ELASTICSEARCH_NODE: Joi.string(),
  ELASTICSEARCH_USERNAME: Joi.string(),
  ELASTICSEARCH_PASSWORD: Joi.string(),

  MINO_HOST: Joi.string(),
  MINO_PORT: Joi.number().default(9000),
  MINO_APP_BUCKET: Joi.string(),
  MINO_ACCESS_KEY: Joi.string(),
  MINO_SECRET_KEY: Joi.string(),

  FRONTEND_URL: Joi.string().required(),
});
