import { quiz } from "./routes/quiz.mjs"

export class Question{
    questions = [{
        id : `ques-1`,
        ques : 'Which tag is not a block TAG ?',
        ans : ['H1', 'P', 'IMG', 'FORM'],
        correctAnsIndex : 2,
        duration : 1
    },{
        id : `ques-2`,
        ques : 'Which one is a inline TAG ?',
        ans : ['H1', 'A', 'FOOTER', 'FORM'],
        correctAnsIndex : 1,
        duration : 1
    },{
        id : `ques-3`,
        ques : 'Which tag is not a block TAG ?',
        ans : ['H1', 'P', 'MAIN', 'INPUT'],
        correctAnsIndex : 3,
        duration : 1
    },{
        id : `ques-4`,
        ques : 'Which is not a css Property ?',
        ans : ['text-color', 'background-color', 'opacity', 'visibility'],
        correctAnsIndex : 0,
        quizId : null,
        duration : 1
    }]
    add = (req, res) => {

        const question = {
            id : `question-${this.questions.length + 1}`,
            ...req.body
        }
        this.questions.push(question)

        const quizIndex = quiz.quizes.findIndex(q => q.id === req.body.quizId)
        if(quizIndex !== -1){
            quiz.quizes[quizIndex].ques ? quiz.quizes[quizIndex].ques.push(question) : quiz.quizes[quizIndex].ques = []
            quiz.quizesAnswers[quizIndex][question.id] = question.correctAnsIndex
        }

        res.status(201).send({
            bSuccess : true,
            message : `Question added to quiz successfully !`
        })

    }
    read = (req,res) => {
        res.send(this.questions)
    }
}