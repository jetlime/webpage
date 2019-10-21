
// sent an http request to this url :
var url ='http://mylogger.io/log';

function log(message){
    console.log(message);
}   

//export the log function to the main module
module.exports = log ;
//  we will keep the url private

