import knex from "knex";
import config from "./knexfile";

const nodeEnvConfig = config[process.env.NODE_ENV || 'development'];

const db = knex(nodeEnvConfig);

export default db;