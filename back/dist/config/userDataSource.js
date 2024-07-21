"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turnModel = exports.CredentialModel = exports.UserModel = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const userEntity_1 = require("../entidades/userEntity");
const credEntity_1 = require("../entidades/credEntity");
const turnEntity_1 = require("../entidades/turnEntity");
require("dotenv").config();
const DB_PASS = process.env.claveDB;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: DB_PASS,
    database: "testdb",
    synchronize: true,
    logging: true,
    entities: [userEntity_1.User, turnEntity_1.Turn, credEntity_1.Credential],
    subscribers: [],
    migrations: [],
    dropSchema: true
});
exports.UserModel = exports.AppDataSource.getRepository(userEntity_1.User);
exports.CredentialModel = exports.AppDataSource.getRepository(credEntity_1.Credential);
exports.turnModel = exports.AppDataSource.getRepository(turnEntity_1.Turn);
