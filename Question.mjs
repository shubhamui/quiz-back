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
        quiz : null,
        duration : 1
    }]
    add = (req, res) => {
        this.questions.push({
            id : `question-${questions.length + 1}`,
            ...req.body
        })
        res.status(200).send(questions)
    }
    read = (req,res) => {
        res.send(this.questions)
    }
}