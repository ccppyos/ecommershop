"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedRoutes = void 0;
const express_1 = require("express");
const seed_controller_1 = require("../controllers/seed.controller");
const seedController = new seed_controller_1.SeedController();
exports.seedRoutes = (0, express_1.Router)();
exports.seedRoutes.get('/', seedController.createSeed);
//# sourceMappingURL=seed.routes.js.map