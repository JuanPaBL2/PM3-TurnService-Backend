import { Request, Response } from "express";
import { getAllTurnsService, getTurnByIdService, cancelTurnService, createTurnService } from "../services/turnServices"

//import { ITurn } from "../interfaces/interfaz";

export const controladorGetAppointment = async (req: Request, res: Response) => {
    try {
        // Llama al servicio para obtener el listado completo de turnos
        const turns = await getAllTurnsService();
        // Envía una respuesta con el listado de turnos
        res.status(200).json(turns);
    } catch (error:any) {
        res.status(500).json({error: error.message});
    }
}


export const controladorGetAppointmentId = async (req: Request, res: Response) => {
    try {
        const turnId = parseInt(req.params.id); // Obtén el ID del turno de los parámetros de la URL
        //Llama al servicio para obtener el detalle del turno por su ID
        const turn = await getTurnByIdService(turnId);
        //Si el turno no se encuentra, devuelve un mensaje de error
        if (!turn) {
            res.status(404).send("Turno no encontrado");
            return;
        }
        res.status(200).json(turn);
    } catch (error:any) {
        res.status(500).json({error: error.message});
    }
}


//CONTROLADOR A RESOLVER
export const controladorNewAppointment = async (req: Request, res: Response) => {
    try {
        const { date, time, id } = req.body;
        const turnData = {date, time, id};
        
        // Llama al servicio para crear un nuevo turno
        const newTurn = await createTurnService(turnData);
        // Envía una respuesta con los detalles del turno creado
        res.status(200).json(newTurn);
    } catch (error:any) {
        res.status(500).json({error: error.message});
    }
}


export const controladorCancelAppointment = async (req: Request, res: Response) => {
    try {
        const turnId  = req.params.id; // Obtén el ID del turno de los parámetros de la URL
        // Llama al servicio para cancelar el turno por su ID
        await cancelTurnService(Number(turnId));
        // Envía una respuesta de éxito
        res.status(200).send("Turno cancelado con éxito");
    } catch (error:any) {
        res.status(500).json({error: error.message});
    }
}