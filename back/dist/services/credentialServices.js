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
exports.loginUserService = exports.createCredentialsService = void 0;
const userDataSource_1 = require("../config/userDataSource");
//Función para crear un nuevo par de credenciales
const createCredentialsService = (cred) => __awaiter(void 0, void 0, void 0, function* () {
    const credUser = yield userDataSource_1.CredentialModel.create(cred);
    yield userDataSource_1.CredentialModel.save(credUser);
    //devuelvo solo el id
    return credUser.id;
});
exports.createCredentialsService = createCredentialsService;
const loginUserService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const foundCredential = yield userDataSource_1.CredentialModel.findOne({ where: { username, password } });
    if (!foundCredential) {
        throw new Error("Credenciales incorrectas.");
    }
    else {
        return foundCredential;
    }
});
exports.loginUserService = loginUserService;
