import {DataSource} from "typeorm"
import { User } from "../entidades/userEntity"
import { Credential } from "../entidades/credEntity"
import { Turn } from "../entidades/turnEntity";

require("dotenv").config();

const DB_PASS = process.env.claveDB;

export const AppDataSource = new DataSource({ 
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: DB_PASS,
    database: "testdb", 
    synchronize: true,
    logging: true, 
    entities: [User, Turn, Credential], 
    subscribers: [] ,
    migrations: [],
    dropSchema: true
})

export const UserModel =  AppDataSource.getRepository(User);

export const CredentialModel = AppDataSource.getRepository(Credential);

export const turnModel = AppDataSource.getRepository(Turn)