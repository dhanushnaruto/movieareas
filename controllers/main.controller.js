import Movie from '../models/movies.models.js'

export const movieIndex = async (req, res)=>{
    try{
        const movie = await Movie.find()
        res.json(movie)
    }catch(error){
        res.status(400).json(error.message)
    }
}
export const movieCreate = async (req,res)=>{

    const newMovie = new Movie({
        title: req.body.title,
        desc : req.body.desc
    })

    try{
        const movie = await newMovie.save()
        res.status(200).json(movie)

    }catch(error){
        res.status(400).json(error.message)
    }

}

export const movieUpdate = async(req, res) =>{

    try {
        const updatedMovie = await Movie.findOneAndUpdate({_id:req.params.id}, {title:req.body.title},{
            new : true
        })
        res.status(200).json(updatedMovie)

    } catch (error) {
        res.status(400).json(error.message)
    }
}