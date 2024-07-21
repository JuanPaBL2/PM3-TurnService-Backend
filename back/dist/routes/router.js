"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
const turnRoutes_1 = __importDefault(require("./turnRoutes"));
const router = (0, express_1.Router)();
router.use('/users', userRoutes_1.default);
router.use('/turn', turnRoutes_1.default);
exports.default = router;
