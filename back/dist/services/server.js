"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("../routes/router"));
const cors_1 = __importDefault(require("cors"));
const { swaggerUi, swaggerSpec } = require('./swagger');
const servidor = (0, express_1.default)();
servidor.use((0, cors_1.default)());
servidor.use(express_1.default.json());
servidor.use(router_1.default);
servidor.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
exports.default = servidor;
