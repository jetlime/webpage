const summary = async() => {
    $.ajax({
        url: "http://localhost:3000/test",
        method: "GET",
        mode: "no-cors",
        dataType: 'jsonp',
        error: function(data) {
            console.log("Error, UNABLE to fetch data from the server. Verify if the server listens on port 3000.")
            document.getElementById('overview').innerHTML = `
                <p class='error'>ERROR</p>
                <br>
                <p class="error2" >It was not possible to fetch the data from the localserver. Please check if the server listens on port 3000.</p>
                `
        },
        success: function(data) {
            console.log(data.test);
            test = data.test;
            console.log(test);  
            let sum = 0;       
            document.getElementById('overview').innerHTML =
                `
   <p> ${test.length} tests are represented on this webpage.</p>
   ${test.map(function(parameter){
       let sum = 0;
       for (var i = 0; i < test.length; i++) {
            let sum = sum + parameter.pass[i] + parameter.fail[i];
            };
            console.log(sum);
       return`
            ${parameter.pass}
            `
       
   })}
    `;
        }
    });
};