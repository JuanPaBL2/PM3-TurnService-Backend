"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdService = exports.getAllUsersService = exports.createUserService = void 0;
const credentialServices_1 = require("./credentialServices");
const userDataSource_1 = require("../config/userDataSource");
//SERVICIO USER REGISTER (POST)
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialId = yield (0, credentialServices_1.createCredentialsService)({
        username: userData.username,
        password: userData.password
    });
    const newUser = yield userDataSource_1.UserModel.create({
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        dni: userData.dni,
        //solo agrego el id de las credenciales al user.
        credential: { id: credentialId }
    });
    yield userDataSource_1.UserModel.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
//SERVICIO GET USER (GET)
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userDataSource_1.UserModel.find();
    return users;
});
exports.getAllUsersService = getAllUsersService;
//SERVICIO GET USER ID (GET)
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userDataSource_1.UserModel.findOne({ where: { id }, relations: { turnos: true } });
    if (!user) {
        throw Error("usuario no encontrado"); // Si no se encontró ningún usuario, retorna undefined
    }
    return user; // Retorna el usuario encontrado
});
exports.getUserByIdService = getUserByIdService;
