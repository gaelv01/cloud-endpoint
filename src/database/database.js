import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('cloud','postgres','admin', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433,
});

