"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicController = void 0;
const path_1 = require("path");
const publicPath = (0, path_1.join)(__dirname, '../../public/');
class PublicController {
    sendErrorPage(req, res) {
        res.sendFile(publicPath + 'Error404.html');
    }
    sendContactPage(req, res) {
        res.sendFile(publicPath + 'contact.html');
    }
}
exports.PublicController = PublicController;
//# sourceMappingURL=public.controller.js.map