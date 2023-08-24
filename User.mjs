export class User{
    users = [{
        id : `user-1`,
        name : 'Shubham Gupta',
        contact : '9782312993'
    }]

    usersAuth = [{
        contact : "9782312993",
        password : "shubham#123"
    }]

    add = (req, res) => {
        const user = this.users.find(u => u.contact === req.body.contact)
        if(user){
            res.status(409).send({
                bSuccess : false,
                message : 'User already exist !'
            })
        }else{
            let userInfo = {}
            Object.keys(req.body).forEach(key => key == "password" ? null : userInfo[key] = req.body[key])
            this.users.push({
                id : `user-${this.users.length + 1}`,
                ...userInfo
            })

            this.usersAuth.push({
                contact : req.body.contact,
                password : req.body.password
            })

            res.status(201).send({
                bSuccess : true
            })
        }
    }

    read = (req,res) => {
        res.send(this.users);
    }

    login = (req, res) => {
        let userIndex = this.usersAuth.findIndex(user => user.contact === req.body.contact && user.password === req.body.password)
        userIndex !== -1 ? res.status(200).send({
            bSuccess : true,
            authenticationToken : this.users[userIndex].id,
            user : {...this.users[userIndex]}
        }) : res.status(401).send({
            bSuccess : false,
            message : `No user found`
        })
    }

    resetPassword = (req, res) => {
        let userIndex = this.usersAuth.findIndex(user => user.contact === req.body.contact)
        if(userIndex !== -1){
            this.usersAuth[userIndex].password = req.body.password
            res.status(200).send({
                bSuccess : true,
                message : "Password reset successfully !"
            })
        }else{
            res.status(401).send({
                bSuccess : false,
                message : `No user found !`
            })
        }
    }

    update = (req, res) => {
        let userIndex = this.usersAuth.findIndex(user => user.contact === req.body.contact)
        if(userIndex !== -1){
            let user = this.users[userIndex]
            Object.keys(req.body).forEach(key => user[key] = req.body[key])
            this.users[userIndex] = user
            res.status(204).send({
                bSuccess : true,
                message : "Updated Successfully !",
                user : {
                    ...this.users[userIndex]
                }
            })
        }else{
            res.status(401).send({
                bSuccess : false,
                message : `No user found !`
            })
        }
    }
    
    getCertificates = (req,res) => {
        let user = this.users.find(user => user.id === req.params.id)
        res.send(user.certificates)
    }
}