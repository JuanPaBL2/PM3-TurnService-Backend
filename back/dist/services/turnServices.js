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
exports.getTurnByIdService = exports.getAllTurnsService = exports.cancelTurnService = exports.createTurnService = void 0;
const userDataSource_1 = require("../config/userDataSource");
const createTurnService = (turnData) => __awaiter(void 0, void 0, void 0, function* () {
    //user model tiene turns: Turns
    const user = yield userDataSource_1.UserModel.findOne({ where: { id: turnData.id } }); // Usar userId para buscar el usuario
    if (!user) {
        throw new Error(`No se encontró un usuario con el ID: ${turnData.id}`);
    }
    const turn = yield userDataSource_1.turnModel.create({
        date: turnData.date,
        time: turnData.time,
        status: "active",
        user: user
    });
    yield userDataSource_1.turnModel.save(turn);
    return turn;
});
exports.createTurnService = createTurnService;
const cancelTurnService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield userDataSource_1.turnModel.findOneBy({ id });
    if (!turn) {
        throw new Error(`No se encontró un turno con el ID: ${id}`);
    }
    turn.status = "cancelled";
    yield userDataSource_1.turnModel.save(turn);
    return turn;
});
exports.cancelTurnService = cancelTurnService;
const getAllTurnsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield userDataSource_1.turnModel.find();
    return turns;
});
exports.getAllTurnsService = getAllTurnsService;
const getTurnByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield userDataSource_1.turnModel.findOne({ where: { id }, relations: ['user'] });
    if (turn) {
        return {
            id: turn.id,
            date: turn.date,
            time: turn.time,
            user: turn.user,
            status: turn.status
        };
    }
    return null;
});
exports.getTurnByIdService = getTurnByIdService;
