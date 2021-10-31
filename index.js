const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
 
const db = mysql.createPool({ 
    connectionLimit: 10,
    acquireTimeout: 30000, 
    host: '209.97.182.170', 
    user: 'nrwlpmscom_nrwlpmscom',
    password: 'G3rW8yJ2bX9uK5i',
    database: 'nrwlpmscom_cruddatabase',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert", (req, res) =>{

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO `movie_table`(`movie`, `description`) VALUES (?,?)"
    db.query(sqlInsert, [movieName, movieReview], (err, result) =>{
       console.log(err)
    })
    
})

app.listen(3001, () => {
    console.log("running on port 3001")
})