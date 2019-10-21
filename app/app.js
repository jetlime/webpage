//function sayHello(name){
//    console.log('Hello ' + name); //global object
//}
//
//sayHello('paul');

// access with global
//setTimeout(); // call a functio after a delay
//clearTimeout();
//clearInterval();

//need to create modules to stock functions and variables so they don't overwrite (that are defined somewhere else).
// every file in a node application is considered a module.
// its a private container , just works in the module (if not exported)


//main module :

//console.log(module);

// create and load a module :
// returns the exported object :
//var log = require('./logger.js');
//log("message");


//const path = require('path');

//var pathObject = path.parse(__filename);
 //console.log(pathObject);

//const os = require('os');

//var persInfo = os.userInfo()
//var userTime = os.uptime()/60/60;
//var totalMemory = os.totalmem();
//var freeMemory = os.freemem();

//console.log('Total Memory :' + totalMemory);
//console.log('Your free Memory is ' + freeMemory);
//console.log('Your uptime is ' + userTime + ' hours.');
//console.log('Personal information : ' + persInfo);

//console.log(`Total Memory ${totalMemory}`);
//console.log(`Free Memory ${freeMemory}`);


//const fs = require('fs');
//const files = fs.readdirSync("./");
//console.log(files);

//fs.readdir('./', function(err, files){
    //if(err) console.log('Error',err);
    //else console.log('Result',files);
//});

// EVENTS :

//listen on a given port, each time a request is received on this port an http class raises an event.
// eventemitter is a class. 
//const EventEmitter = require('events');
//const emitter = new EventEmitter();

//listener :

//emitter.on('messageLogged', function(){
//    console.log('Listener called');
//});

// raise an event, needs a listener !!!!

//emitter.emit('messageLogged');

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});


server.listen(8000);

console.log('Listening on port 8000...');
// rest => representational state transfer
// CRUD operations => create; reset; ptade; delete
// methods : get , post , put , delete