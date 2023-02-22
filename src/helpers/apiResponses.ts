import { Response } from "express"

export const success = <T>(res: Response,data: T) => {
    return res.json({ statuscode: 200, body: data })
}

export const fail = <T>(res: Response, error: T) => {
    res.status(400).json({ statuscode: 400, error })
}