import { NextFunction, Request, Response } from "express";


const authantication_header_server = "//*use your own secret key... this server is compilded in es3. .env doesn't work properly in es3. so I cant use dotenv here*//"

const auth = (req: Request, res: Response, next: NextFunction) => {
    const authantication_header = req.headers.authorization as string
    if (!authantication_header) {
        return res.json({ "Message": "Unauthorized...", "Status": false })
    }
    const authantication_header_client = authantication_header.toString()

    if (authantication_header_client === authantication_header_server) {
        next()
    } else {
        res.json({ "Message": "Unauthorized...", "Status": false })
    }
}

export default auth