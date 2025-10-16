import  Express  from "express";
import type { Response, Request } from "express";
import dotenv from "dotenv";

//dotenv it is library to soter enviroment variable

dotenv.config()
const App = Express()
const port = process.env.PORT || 3000;

App.get('/', (req: Request, res: Response) => {
    res.send(process.env.API_KEY)
})

App.listen(port, () => {
    console.log(`serrver is rinning om http://localhost:${port} `)
}) 