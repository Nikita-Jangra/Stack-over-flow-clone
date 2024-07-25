import express from 'express'
import mongooose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Question.js'
import answerRoutes from './routes/Answers.js'
const app = express();
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
app.use(cors());

app.get('/',(req,res) =>{
    res.send("This is a stackoverflow clone API")
})

app.use('/user' ,userRoutes)       // if /user/signup is used then signup function will be called
app.use('/questions' ,questionRoutes)       // if /user/signup is used then signup function will be called
app.use('/answer',answerRoutes)
const PORT = process.env.PORT || 5000

const CONNECTION_URL='mongodb+srv://nikitajangra:Nikita-2003@cluster0.gpi9gzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongooose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology: true})
.then(() => app.listen(PORT ,() => {console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))