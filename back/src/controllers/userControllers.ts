import { Request, Response } from "express";
import { createUserService, getAllUsersService, getUserByIdService } from "../services/userService";
import { loginUserService } from "../services/credentialServices";
import { User } from "../entidades/userEntity";
import { json } from "stream/consumers";
import { UserModel } from "../config/userDataSource";

//CONTROLADOR DE REGISTER USER (POST)
const controladorRegister = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const newUser = await createUserService(userData);
        res.status(201).json(newUser);
    } catch (error:any) {
        res.status(400).json({error: error.message});
    }
}

//CONTROLADOR PARA USER LOGIN (POST)
const controladorLogin = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const credential = await loginUserService(username, password);

        const user = await UserModel.findOne({ where: { credential } })
        if (user) {
            res.status(200).json({login: true, user})
        } else {
            throw Error("Usuario no encontrado.")
        }
        
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
}


//CONTROLADOR SOLICITUD GET USER (GET)
const controladorGetUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsersService();
        res.status(200).json(users);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
}

//CONTROLADOR SOLICITUD GET USER ID (GET)
const controladorGetUsersId = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await getUserByIdService(userId);
        if (!user) {
            res.status(404).send("Usuario no encontrado");
            return;
        }
        res.status(200).json(user);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
}

export {controladorGetUsersId, controladorGetUsers,controladorLogin,controladorRegister};