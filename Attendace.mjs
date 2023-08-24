export class Attendance{
    attendance = {
        "CS-II-C" : {
            "subject-1" : {
                "1692847196190" : [true, true, false, true, true, true, true, false],
                "1692933637968" : [true, true, true, true, true, true, true, true]
            },
            "subject-2" : {
                "1692847196190" : [true, false, false, true, true, true, true, false],
                "1692933637968" : [true, true, true, true, true, true, false, true]
            } 
        },
        "CS-I-A" : {
            "subject-1" : {
                "1692847196190" : [true, true, true, true, true, true, true, true],
                "1692933637968" : [false, true, true, false, false, true, true, true]
            },
            "subject-2" : {
                "1692847196190" : [true, false, false, true, true, true, true, false],
                "1692933637968" : [true, true, true, true, true, true, false, false]
            } 
        }
    }

    read = (req, res) => {
        res.send(this.attendance)
    }

    mark = (req, res) => {
        if(req.body.sectionId && req.body.subjectId && req.body.attendance){
            this.attendance[req.body.sectionId] = this.attendance[req.body.sectionId] || {}
            this.attendance[req.body.sectionId][req.body.subjectId] = this.attendance[req.body.sectionId][req.body.subjectId] || {}
            this.attendance[req.body.sectionId][req.body.subjectId][(new Date).getTime().toString()] = req.body.attendance
            res.status(201).send({
                bSuccess : true,
                message : 'Successfully Marked !'
            })
        }else{
            res.status(422).send({
                bSuccess : false,
                message : 'Invalid Inputs !'
            })
        }
        
    }

}