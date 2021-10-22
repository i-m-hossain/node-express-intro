const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send("hey from Node js calling dfg")
})
const users = [
    { id: 0, name: 'joshim', email: 'joshim@gmail.com' },
    { id: 1, name: 'joshim', email: 'joshim@gmail.com' },
    { id: 2, name: 'shakib', email: 'joshim@gmail.com' },
    { id: 3, name: 'bapparaj', email: 'joshim@gmail.com' },
    { id: 4, name: 'amit', email: 'joshim@gmail.com' },
    { id: 5, name: 'mehedi', email: 'joshim@gmail.com' },

]
// app.get('/users', (req,res)=>{
//     res.send(users)
// })

//accessing query parameter
app.get('/users', (req, res) =>{
   const searchText = req.query.search;
   if(searchText){
       const result = users.filter(user => user.name.toLowerCase.includes(searchText))
       res.send(result)
   }else{
       res.send(users)
   }
   
})

// api parameter
app.get('/users/:userId', (req, res)=>{
    const id = req.params.userId
    const user = users[id]
    res.send(user)
})
app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('yammy yammy am')
})
app.get('/fruits', (req,res)=>{
    res.send(['mango', 'orange', 'apple'])
})

// post method
app.post('/users',  (req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the posts', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

