const summary = async () => {
    $.ajax({
        url: "http://localhost:3000/test",
        method: "GET",
        mode: "no-cors",
        dataType: 'jsonp',
        error: function (data) {
            console.log("Error, UNABLE to fetch data from the server. Verify if the server listens on port 3000.")
            document.getElementById('overview').innerHTML = `
                <p class='error'>ERROR</p>
                <br>
                <p class="error2" >It was not possible to fetch the data from the localserver. Please check if the server listens on port 3000.</p>
                `
        },
        success: function (data) {
            Totalpass = 0;
            Totalfail = 0;
            // function computing the sum of all passed test.
            $.each(data.test, function () {
                Totalpass += this.pass;
            });
            $.each(data.test, function(){
                Totalfail += this.fail;
            })
            graphRatio = Totalpass/(Totalfail + Totalpass)*100 ;
            fillGraph = 100 - graphRatio;
            console.log(graphRatio);
            test = data.test;
            console.log(test);
            document.getElementById('overview').innerHTML =
                `
            <style>
            .rectangle{
                width : 100px;
                height : 100mm;
                background : #4CAF50;
            }
            .rectangleGraph{
                width : 100px;
                height : ${fillGraph}mm;
                background : #dddd;
            }
            .rectangleGraph:hover {
               
            }
            </style>
   <p> ${test.length} tests are represented on this webpage.</p>
   <p> The sum of all passed test is : ${Totalpass}</p>
   <p> The sum of all failed test is : ${Totalfail}</p>
   <div class="rectangle">
   <div class="rectangleGraph"></div>
   </div>
   <p>${graphRatio} %</p>
   <span>${Totalpass} over ${Totalpass + Totalfail} tests were passed.</span>
     `;
        }
    });
};