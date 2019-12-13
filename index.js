// Import the express and morgan library (modules)
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');

// Will give use the time needed for the request (debug help)
app.use(morgan("short"));

var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

// Create server on a given port 3000 :
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


// GET REQUESTS :

// Get request by going to the root (/) :
// This is a callback function with two parameters.
// "req" is the request from the browser.
// "res" is the response from the server.
app.get("/", (req, res) => {
    res.send(
        'This is the root of the local webserver. Under the directory "/test" you will find the Json arrays.'
    );
});

const testing = require('./serverdata/data.json');


// Get the Json array in the following directory :
app.get("/test", (req, res) => {
    console.log(testing);
    res.jsonp({
        test: testing
    });
});

// Get a single test :
app.get("/test/:id", (req, res) => {
    // If the id does not exist an error is shown :
    if (req.params.id > testing.length - 1) {
        res
            .status(404)
            .send(
                "ERROR 404 File not found. A test with an id of " +
                req.params.id +
                " does not exist."
            );
        console.log("This id does not exist.");
    } else {
        console.log("Fetching user with id " + req.params.id);
        //res.json(test[req.params.id]);
        console.log(JSON.stringify(testing[req.params.id]))
        res.send(`
    <style>
    .idpage{
      color : #4CAF50;
      padding-inline-end: 20%;
      text-align-last: center;
      padding : 2%;
      font-size: 50px;
  }
  
  h2{
      font-weight: 300;
      font-family: sans-serif;
  }
  
  
   .input{
      border: none;
      border-bottom: 2px solid #4CAF50;
    }
  .input_2{
      border : solid #4CAF50;
      padding : 16px;
  }
  .button_1{
    background-color: #4CAF50;
    color: white;
    text-align: right;
    transition: 0.3s;
    padding:2px 4px;
    font-size: 25px;
    margin: 2px 4px;
    border: none;
}
.button_1:hover{
    color: black;
    background-color: #dddddd;
}
.myProgress {
  width: 180%;
  background-color: #ddd;
}
.username{
    color : #4CAF50;
    font-weight : 700;
    font-size : 22px;
}
.form{
    background-color:white;
    border : 1px solid black;
}
</style>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <div class="idpage">${JSON.stringify(testing[req.params.id].test_id).slice(1,-1).toUpperCase()}</div>
        <br>
        <hr width="60%" size="2" color="#4CAF50">
        <br>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h2>Average time : </h2>
                    <br>
                    ${JSON.stringify(testing[req.params.id].time)} seconds
                </div>
                <div class="col-sm">
                    <h2>Passed tests :</h2>
                    <br>
                    ${JSON.stringify(testing[req.params.id].pass)}
                </div>
                <div class="col-sm">
                    <h2>Failed Test : </h2>
                    <br>
                    ${JSON.stringify(testing[req.params.id].fail)}
                </div>
                <div class="col-sm">
                    <h2>Ratio :</h2>
                    <br>
                    <div class='myProgress'>
                    <div style="background-color:#4CAF50; width:${JSON.stringify(testing[req.params.id].pass_fail)}%;">${JSON.stringify(testing[req.params.id].pass_fail)}%</div>
                    </div>
                </div>
            </div>
        </div>  
        <br>
        <br> 
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <form method = "POST" action = "/test/${req.params.id}/comment">
                        <input type="text" name="name" class="input" width="50%" id="name" placeholder="Name">     
                        <br>
                        <br>        
                        <textarea name="comment" class="input_2" id="comment" placeholder="Please enter a comment ..." rows="10" cols="70"></textarea>
                        <br>
                        <input class="form" type='submit' value='Submit'/> 
                    </form>
                    <div id="error"></div>
                </div>
                <div class="col-sm">
                <br> 
                <br>
                    <h4>User comments :</h4>
                    <p>${testing[req.params.id].comments.map(function(parameter){
                        return`
                            <p class="username"> ${parameter.commentuser}</p>
                            <p>${parameter.comment}</p>
                           
                        `
                    }).join("")
                        }</p>
                    <div id="comment"></div
                </div>
            </div>
        </div>

        
</div>
    
    
    `)
    }
});




app.get('/test/:id/comment', function (req, res) {
    res.end();
})


// Handle the post request
app.post('/test/:id/comment', urlencodedParser, function (req, res) {
    console.log("User Name : " + req.body.name);
    console.log("User Comment: " + req.body.comment);
    if (req.body.name && req.body.comment) {
        console.log('Your comment was posted !');
        res.sendFile(__dirname + '/HTML/comment-success.html');
        testing[req.params.id].comments.push({
            comment: req.body.comment,
            commentuser: req.body.name
        })
        fs = require('fs');
        try {
            const data = fs.writeFileSync('./serverdata/names.txt', req.body.name + " commented " + req.body.comment + ". \n", {
                flag: "a+"
            })
            //file written successfully
        } catch (err) {
            console.error(err);
        }

    } else if (req.body.name) {
        console.log('Please enter a comment!');
        res.send("Please enter a comment");
        res.end();
    } else if (req.body.comment) {
        console.log('Please enter a name !');
        res.send("Please enter a name")
        res.end();
    } else {
        console.log('Please fill out the form !');
        res.send("Fill out the form correctly")
        res.end();
    }


})