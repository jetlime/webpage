// Import the express and morgan library
const express = require("express");
const app = express();
const morgan = require("morgan");
//will give use the time needed for the request (debug help)
app.use(morgan("short"));
app.use("/api", express.static("api"), function(req, res) {
  res.status(404);
  res.json({ error: { code: 400 } });
});

var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': 'http://localhost:3000/test',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));


// Create server on a given port :
// PORT can be set in terminal zith "set PORT=portnumber" command,
// If not defined the port number is 3000.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Json Arrays :
const test = [
  {
    id: 0,
    test_id: "password test",
    pass: 1,
    fail: 5,
    time: 0.03,
    pass_fail: 20
  },
  {
    id: 1,
    test_id: "password test",
    pass: 1,
    fail: 5,
    time: 0.03,
    pass_fail: 20
  },
  {
    id: 2,
    test_id: "Form testing",
    pass: 10,
    fail: 0,
    time: 0.09,
    pass_fail: 100
  },
  {
    id: 3,
    test_id: "Login Test 2",
    pass: 15,
    fail: 0,
    time: 0.04,
    pass_fail: 100
  },
  {
    id: 4,
    test_id: "Pen Test",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 0
  },
  {
    id: 5,
    test_id: "Pen Test 2",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 1
  },
  {
    id: 6,
    test_id: "Pen Test 3",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 40
  },
  {
    id: 7,
    test_id: "Login Test 4",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 0
  },
  {
    id: 8,
    test_id: "Pen Test 4",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 80
  },
  {
    id: 9,
    test_id: "Pen Test 4",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 0
  }
];

// Get request by going to the root (/) :
// This is a callback function with two parameters.
// "req" is the request from the browser.
// "res" is the response from the server.
app.get("/", (req, res) => {
  res.send(
    'This is the root of the local webserver. Under the directory "/test" you will find the Json arrays.'
  );
});

// Get the Json array in the following directory :
app.get("/test", (req, res) => {
  console.log(test);
  res.jsonp({test:test}); 
});

// Get a single test :
app.get("/test/:id", (req, res) => {
  // If the id does not exist an error is shown :
  if (req.params.id > test.length - 1) {
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
    res.json(test[req.params.id]);
  }
});
