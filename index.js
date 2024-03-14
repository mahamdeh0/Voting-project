import express from 'express';
import  dotenv from 'dotenv';
import connectDB from './DB/connection.js';
import * as indexRouter from './src/modules/index.router.js'
dotenv.config({path:'./config/.env'});
const app = express()
const port = 3000
app.use(express.json())


connectDB()

const baseUrl=process.env.BASEURL
app.use(`${baseUrl}/auth`, indexRouter.authRouter);
app.use('*',(req,res)=>{

    res.status(404).json({message:"page not found"})
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))