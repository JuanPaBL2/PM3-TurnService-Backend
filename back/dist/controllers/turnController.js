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
exports.controladorCancelAppointment = exports.controladorNewAppointment = exports.controladorGetAppointmentId = exports.controladorGetAppointment = void 0;
const turnServices_1 = require("../services/turnServices");
//import { ITurn } from "../interfaces/interfaz";
const controladorGetAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Llama al servicio para obtener el listado completo de turnos
        const turns = yield (0, turnServices_1.getAllTurnsService)();
        // Envía una respuesta con el listado de turnos
        res.status(200).json(turns);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.controladorGetAppointment = controladorGetAppointment;
const controladorGetAppointmentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turnId = parseInt(req.params.id); // Obtén el ID del turno de los parámetros de la URL
        //Llama al servicio para obtener el detalle del turno por su ID
        const turn = yield (0, turnServices_1.getTurnByIdService)(turnId);
        //Si el turno no se encuentra, devuelve un mensaje de error
        if (!turn) {
            res.status(404).send("Turno no encontrado");
            return;
        }
        res.status(200).json(turn);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.controladorGetAppointmentId = controladorGetAppointmentId;
//CONTROLADOR A RESOLVER
const controladorNewAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, id } = req.body;
        const turnData = { date, time, id };
        // Llama al servicio para crear un nuevo turno
        const newTurn = yield (0, turnServices_1.createTurnService)(turnData);
        // Envía una respuesta con los detalles del turno creado
        res.status(200).json(newTurn);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.controladorNewAppointment = controladorNewAppointment;
const controladorCancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turnId = req.params.id; // Obtén el ID del turno de los parámetros de la URL
        // Llama al servicio para cancelar el turno por su ID
        yield (0, turnServices_1.cancelTurnService)(Number(turnId));
        // Envía una respuesta de éxito
        res.status(200).send("Turno cancelado con éxito");
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.controladorCancelAppointment = controladorCancelAppointment;
