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
exports.controladorRegister = exports.controladorLogin = exports.controladorGetUsers = exports.controladorGetUsersId = void 0;
const userService_1 = require("../services/userService");
const credentialServices_1 = require("../services/credentialServices");
const userDataSource_1 = require("../config/userDataSource");
//CONTROLADOR DE REGISTER USER (POST)
const controladorRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const newUser = yield (0, userService_1.createUserService)(userData);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.controladorRegister = controladorRegister;
//CONTROLADOR PARA USER LOGIN (POST)
const controladorLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const credential = yield (0, credentialServices_1.loginUserService)(username, password);
        const user = yield userDataSource_1.UserModel.findOne({ where: { credential } });
        if (user) {
            res.status(200).json({ login: true, user });
        }
        else {
            throw Error("Usuario no encontrado.");
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.controladorLogin = controladorLogin;
//CONTROLADOR SOLICITUD GET USER (GET)
const controladorGetUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getAllUsersService)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.controladorGetUsers = controladorGetUsers;
//CONTROLADOR SOLICITUD GET USER ID (GET)
const controladorGetUsersId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id);
        const user = yield (0, userService_1.getUserByIdService)(userId);
        if (!user) {
            res.status(404).send("Usuario no encontrado");
            return;
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.controladorGetUsersId = controladorGetUsersId;
