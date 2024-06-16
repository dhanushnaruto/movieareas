import express from 'express'
import movieRoutes from './routes/movieRoute.js'
import connectDb from './lib/db.js'

const app = express()
const port = 3000
connectDb()

app.get('/', (req, res)=>{
    res.json({msg:"Hello Sir"});
})



// use client-middleware-server
app.use('/movies', movieRoutes)  

app.listen(3004, ()=>{
    console.log(`express is start at http://localhost:${port}`);
});