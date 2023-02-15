"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRoutes = void 0;
const express_1 = require("express");
const public_controller_1 = require("../controllers/public.controller");
const publicController = new public_controller_1.PublicController();
exports.publicRoutes = (0, express_1.Router)();
exports.publicRoutes.get('/contact', publicController.sendContactPage);
exports.publicRoutes.get('/*', publicController.sendErrorPage);
//# sourceMappingURL=public.routes.js.map