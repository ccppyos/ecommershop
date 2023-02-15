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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cors_options_1 = require("../config/cors-options");
const path_1 = require("path");
const public_routes_1 = require("../routes/public.routes");
class Server {
    constructor() {
        this.path = {
            public: '/'
        };
        // Inicializar atributos
        this.app = (0, express_1.default)();
        //this.port = 3000;
        this.port = process.env.PORT || 3000;
        // Inicializar métodos
        //Conectar a la BD
        this.connectToDB();
        //Inicializar Middlewars
        this.setMiddlewares();
        //Inicializar Rutas
        this.setRoutes();
    }
    connectToDB() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    setMiddlewares() {
        //Cuando se usa middlewares, se usa la función use( )
        //Para no recibir ataques se definen opciones para cors
        this.app.use((0, cors_1.default)(cors_options_1.corsOptions));
        this.app.use(express_1.default.static((0, path_1.join)(__dirname, '../../public/')));
        this.app.use(express_1.default.json());
    }
    setRoutes() {
        this.app.use(this.path.public, public_routes_1.publicRoutes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server is running on PORT', this.port);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map