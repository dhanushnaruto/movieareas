import express from 'express'
import movieRoutes from './routes/movieRoute.js'
import connectDb from './lib/db.js'

const app = express()
const port = 3004

//  server understanding middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDb()

app.get('/', (req, res)=>{
    res.json({msg:"Hello Sir"});
})



// use client-middleware-server
app.use('/movies', movieRoutes)  

app.listen(port, ()=>{
    console.log(`express is start at http://localhost:${port}`);
});