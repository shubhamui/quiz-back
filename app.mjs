import express from "express"
import cors from "cors"
import userRouter from "./routes/user.mjs"
import quizRouter from "./routes/quiz.mjs"
import quesRouter from "./routes/ques.mjs"
import attendanceRouter from "./routes/attendance.mjs"
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use(userRouter)
app.use(quizRouter)
app.use(quesRouter)
app.use(attendanceRouter)

app.listen(PORT, console.log)