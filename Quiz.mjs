import {user} from "./routes/user.mjs"

export class Quiz{
    quizes = [{
        id : `quiz-1`,
        title : 'HTML',
        subTitle : 'SKIT HTML QUIZ',
        description : 'This is the HTML quiz consist of 15 questions. Every question will give you 1 mark if correct else -1 when wrong',
        guidelines : `Please read the questions carefully. It will not be available after 20 minutes. Thanks.`,
        photo : 'https://cdn-icons-png.flaticon.com/512/1532/1532556.png',
        ques : [{
            id : `ques-1`,
            ques : 'Which tag is not a block TAG ?',
            ans : ['H1', 'P', 'IMG', 'FORM'],
            duration : 1
        },{
            id : `ques-2`,
            ques : 'Which one is a inline TAG ?',
            ans : ['H1', 'A', 'FOOTER', 'FORM'],
            duration : 1
        },{
            id : `ques-3`,
            ques : 'Which tag is not a block TAG ?',
            ans : ['H1', 'P', 'MAIN', 'INPUT'],
            duration : 1
        }],
        duration : 20
    },{
        id : `quiz-2`,
        title : 'CSS',
        description : 'CSS is a web language. Consist of 20 questions.',
        guidelines : 'Mark 1 when correct whereas -1 when wrong',
        subTitle : 'SKIT CSS QUIZ',
        photo : 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
        ques : [{
            id : `ques-4`,
            ques : 'Which is not a css Property ?',
            ans : ['text-color', 'background-color', 'opacity', 'visibility'],
            correctAnsIndex : 0,
            quiz : null,
            duration : 1
        },{
            id : `ques-5`,
            ques : 'Which is not a value for display property ?',
            ans : ['inline', 'none', 'appear', 'block'],
            correctAnsIndex : 0,
            quiz : null,
            duration : 1
        }],
        duration : 20
    }]

    quizesAnswers = [{
        id : `quiz-1`,
        title : 'HTML',
        answers : {
            'ques-1' : 2,
            'ques-2' : 1,
            'ques-3' : 3
        }
    },{
        id : `quiz-2`,
        title : "CSS",
        answers : {
            'ques-4' : 0,
            'ques-5' : 2
        }
    }]
    add = (req, res) => {
        const id = `quiz-${this.quizes.length + 1}`
        this.quizes.push({id,...req.body})
        this.quizesAnswers.push({id, title : req.body.title})
        res.status(200).send(this.quizes)
    }
    read = (req,res) => {
        res.send(this.quizes)
    }
    getQuestions = (req,res) => {
        res.send(this.quizes.find(quiz => quiz.id == req.params.id).ques)
    }
    evaluate = (req,res) => {
        const quiz = this.quizesAnswers.find(quiz => quiz.id == req.body.quizId)
        let score = 0;
        Object.keys(req.body.answers).forEach(ansKey => {
            req.body.answers[ansKey] === quiz.answers[ansKey] ? ++score : --score
        })

        const u = user.users.find(student => student.contact === req.body.contact)
        if(u.certificates){
            u.certificates[quiz.id + ':' + quiz.title] = {
                "om" : score,
                "mm" : Object.keys(quiz.answers).length
            }
        }else{
            u["certificates"] = {
                [quiz.id + ':' + quiz.title] : {
                    "om" : score,
                    "mm" : Object.keys(quiz.answers).length
                }
            }
        }
        

        res.status(200).send({
            bSuccess : true
        })
    }
}