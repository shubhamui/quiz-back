export class User{
    users = [{
        id : `user-1`,
        name : 'Shubham Gupta',
        contact : '9782312993',
        password : 'shubham#123'
    }]
    add = (req, res) => {
        this.users.push({
            id : `user-${this.users.length + 1}`,
            ...req.body
        })
        res.status(200).send(this.users)
    }
    read = (req,res) => {
        res.send(this.users);
    }
    login = (req, res) => {
        let user = this.users.find(user => user.contact === req.body.contact && user.password === req.body.password)
        user ? res.status(200).send({
            bSuccess : true,
            authenticationToken : user.id
        }) : res.status(401).send({
            bSuccess : false,
            message : `No user found`
        })
    }
}