import { Request, Response } from "express";
import {validationResult} from "express-validator";
import {StatusCodes} from "http-status-codes";


export const ValidFields = (req: Request, res: Response, next: any) => {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        console.log("weno aki hay un error");
        return res.status(StatusCodes.BAD_REQUEST).json(errors)
    }
    //con esto continua al controlador
    next();
}