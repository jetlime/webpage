const express = require('express');
const app = express();


const test=[{
    id : 1,
    test_id: "password test",
    pass: 1,
    fail : 5,
    time : 0.03,
    pass_fail: 20,
},{
    id : 2,
    test_id : "Form testing",
    pass: 10,
    fail : 0,
    time : 0.09, 
    pass_fail: 100
},{
    id : 3,
    test_id : "Login Test 2",
    pass: 15,
    fail : 0,
    time : 0.04, 
    pass_fail: 100,
},{
    id : 4,
    test_id : "Pen Test",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 0
},{
    id : 5,
    test_id : "Pen Test 2",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 1
},{
    id : 6,
    test_id : "Pen Test 3",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 40
},{
    id : 7,
    test_id : "Login Test 4",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 0
},{
    id : 8,
    test_id : "Pen Test 4",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 80
},{
    id : 9,
    test_id : "Pen Test 4",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 0
}];

app.get('/', (req,res) => {
    res.send('Hello World !!!');
});
// get list of database and return it :

app.get('/api/test' , (req,res) =>{
    res.send(test);
});

//get a single test : (does not work)

app.get('/api/test/:id' ,(req,res) => {
    const test = test.find(c => c.id === parseInt(req.params.id));
    if (!test) res.status(404).send('The test with the given ID was not found :(');
    res.send(test);
})

// PORT can be set in terminal zith "set PORT=portnumber" command,
//if not defined the port number is 3000.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.post('/api/test', (req,res) =>{
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send('Name is not long enought');
        return;
    }
    const test = {
        id : test.length +1,
        name : req.body.name    
    }
    test.push(test);
    res.send(test);
})