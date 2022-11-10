import express, { Request, Response } from "express";

import execCommand from "../functions/exec"
const router = express.Router()


router.post("/", (req: Request, res: Response) => {
    const commmand = req.body.command as string
    const executable = commmand.toString()

    execCommand(executable, (err: any) => {
        if (err) {
            res.json({ "Message": "Something wrong", "Status": false })
        } else{
            res.json({ "Message": "Execute succesfully", "Status": true })
        }
    })

})


export default router