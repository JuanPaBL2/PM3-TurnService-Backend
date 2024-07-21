"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const router = (0, express_1.Router)();
//ENRUTADOR DE USERS
/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoints para manejar usuarios
 */
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     description: ID del usuario
 *                   name:
 *                     type: string
 *                     description: Nombre del usuario
 *                   email:
 *                     type: string
 *                     description: Email del usuario
 *                   status:
 *                     type: string
 *                     description: Estado del usuario
 *                   birthdate:
 *                     type: string
 *                     format: date
 *                     description: Fecha de nacimiento del usuario
 *                   dni:
 *                     type: number
 *                     description: DNI del usuario
 *                   credential:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                         description: ID de las credenciales
 *                   turnos:
 *                     type: array
 *                     items:
 *                       type: object
 *                       description: Turnos del usuario
 */
router.get("/", userControllers_1.controladorGetUsers);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario obtenido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   description: ID del usuario
 *                 name:
 *                   type: string
 *                   description: Nombre del usuario
 *                 email:
 *                   type: string
 *                   description: Email del usuario
 *                 status:
 *                   type: string
 *                   description: Estado del usuario
 *                   example: active
 *                 birthdate:
 *                   type: string
 *                   format: date
 *                   description: Fecha de nacimiento del usuario
 *                 dni:
 *                   type: number
 *                   description: DNI del usuario
 *                 credential:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       description: ID de las credenciales
 *                 turnos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                         description: ID del turno
 *                       date:
 *                         type: string
 *                         description: Fecha del turno
 *                       time:
 *                         type: string
 *                         description: Hora del turno
 *                       status:
 *                         type: string
 *                         description: Estado del turno
 *                         example: active
 */
router.get("/:id", userControllers_1.controladorGetUsersId);
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nombre de usuario para las credenciales
 *               password:
 *                 type: string
 *                 description: Contraseña para las credenciales
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *               email:
 *                 type: string
 *                 description: Email del usuario
 *               birthdate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de nacimiento del usuario
 *               dni:
 *                 type: number
 *                 description: DNI del usuario
 *     responses:
 *       201:
 *         description: Usuario registrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   description: ID del usuario
 *                 name:
 *                   type: string
 *                   description: Nombre del usuario
 *                 email:
 *                   type: string
 *                   description: Email del usuario
 *                 status:
 *                   type: string
 *                   description: Estado del usuario
 *                   example: active
 *                 birthdate:
 *                   type: string
 *                   format: date
 *                   description: Fecha de nacimiento del usuario
 *                 dni:
 *                   type: number
 *                   description: DNI del usuario
 *                 credential:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       description: ID de las credenciales
 *                 turnos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                         description: ID del turno
 *                       date:
 *                         type: string
 *                         description: Fecha del turno
 *                       time:
 *                         type: string
 *                         description: Hora del turno
 *                       status:
 *                         type: string
 *                         description: Estado del turno
 *                         example: active
 */
router.post("/register", userControllers_1.controladorRegister);
/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nombre de usuario para las credenciales
 *               password:
 *                 type: string
 *                 description: Contraseña para las credenciales
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   description: ID de las credenciales
 *                 username:
 *                   type: string
 *                   description: Nombre de usuario
 *                 password:
 *                   type: string
 *                   description: Contraseña
 */
router.post("/login", userControllers_1.controladorLogin);
exports.default = router;
