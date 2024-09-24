import {DataSource} from "typeorm"
import { User } from "../entidades/userEntity"
import { Credential } from "../entidades/credEntity"
import { Turn } from "../entidades/turnEntity";

require("dotenv").config();


export const AppDataSource = new DataSource({ 
    type: 'postgres',  
    host: process.env.PGHOST, 
    port: parseInt(process.env.PGPORT || '5432', 10), 
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE || process.env.POSTGRES_DB, 
    url: process.env.DATABASE_URL,
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
