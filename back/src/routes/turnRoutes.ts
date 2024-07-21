import { Router} from "express";
import {controladorCancelAppointment, controladorGetAppointment, controladorGetAppointmentId, controladorNewAppointment} from "../controllers/turnController"

const router = Router();


/**
 * @swagger
 * tags:
 *   name: Turnos
 *   description: Endpoints para manejar turnos
 */

/**
 * @swagger
 * /turn:
 *   get:
 *     summary: Obtener todos los turnos
 *     tags: [Turnos]
 *     responses:
 *       200:
 *         description: Lista de turnos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID del turno
 *                   fecha:
 *                     type: string
 *                     description: Fecha del turno
 */
router.get('/', controladorGetAppointment);

/**
 * @swagger
 * /turn/{id}:
 *   get:
 *     summary: Obtener un turno por ID
 *     tags: [Turnos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del turno
 *     responses:
 *       200:
 *         description: Turno obtenido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID del turno
 *                 date:
 *                   type: string
 *                   description: Fecha del turno
 *                 time:
 *                   type: string
 *                   description: Hora del turno
 *                 user:
 *                   type: object
 *                   description: Información del usuario
 *                 status:
 *                   type: string
 *                   description: Estado del turno
 */
router.get('/:id', controladorGetAppointmentId);

/**
 * @swagger
 * /turn/schedule:
 *   post:
 *     summary: Crear un nuevo turno
 *     tags: [Turnos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 description: ID del usuario
 *               date:
 *                 type: string
 *                 format: date
 *                 description: Fecha del turno
 *               time:
 *                 type: string
 *                 description: Hora del turno
 *     responses:
 *       201:
 *         description: Turno creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 date:
 *                   type: string
 *                   description: Fecha del turno
 *                 time:
 *                   type: string
 *                   description: Hora del turno
 *                 status:
 *                   type: string
 *                   description: Estado del turno
 *                   example: active
 *                 user:
 *                   type: object
 *                   description: Información del usuario
 */
router.post('/schedule', controladorNewAppointment);

/**
 * @swagger
 * /turn/cancel/{id}:
 *   put:
 *     summary: Cancelar un turno
 *     tags: [Turnos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del turno a cancelar
 *     responses:
 *       200:
 *         description: Turno actualizado, estado cancelado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID del turno
 *                 date:
 *                   type: string
 *                   description: Fecha del turno
 *                 time:
 *                   type: string
 *                   description: Hora del turno
 *                 user:
 *                   type: object
 *                   description: Información del usuario
 *                 status:
 *                   type: string
 *                   description: Estado del turno
 *                   example: cancelled
 */
router.put("/cancel/:id", controladorCancelAppointment)

export default router;

