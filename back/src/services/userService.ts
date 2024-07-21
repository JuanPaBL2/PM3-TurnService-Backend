import {UserDto} from "../interfacesDtos/user&nameDto"
import { ICredentialDto } from "../interfacesDtos/credDto";

import { createCredentialsService } from "./credentialServices";

import { UserModel } from "../config/userDataSource";

import { User } from "../entidades/userEntity";
import { Credential } from "../entidades/credEntity";

//SERVICIO USER REGISTER (POST)
export const createUserService = async (userData:UserDto): Promise<User>  => {
    
    const credentialId = await createCredentialsService({
        username: userData.username,
        password: userData.password
    });

    
    const newUser: User = await UserModel.create({
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        dni: userData.dni,
        //solo agrego el id de las credenciales al user.
        credential: { id: credentialId }
    });

    await UserModel.save(newUser); 

    return newUser; 
}

//SERVICIO GET USER (GET)
export const getAllUsersService = async (): Promise<User[]> => {
    const users = await UserModel.find();
    return users;
}
   

//SERVICIO GET USER ID (GET)
export const getUserByIdService = async (id:number): Promise<User | null> => {
    const user: User | null = await UserModel.findOne({ where: {id}, relations: {turnos:true}  });

    if (!user) {
        throw Error ("usuario no encontrado"); // Si no se encontró ningún usuario, retorna undefined
    }

    return user; // Retorna el usuario encontrado
};
   



