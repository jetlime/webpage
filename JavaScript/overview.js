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
            Totaltime = 0;
            // function computing the sum of all passed test.
            $.each(data.test, function () {
                Totalpass += this.pass;
            });
            $.each(data.test, function(){
                Totalfail += this.fail;
            })
            $.each(data.test, function(){
                Totaltime += this.time;
            })
            averageTime = Totaltime/data.test.length;
            console.log(averageTime.toString().slice(0,5));
            console.log(Totaltime);
            graphRatio = Totalpass/(Totalfail + Totalpass)*100 ;
            var graphRatioRound = graphRatio.toString().slice(0,5);
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
            
            </style>

<br>
<div class="row">
  <div class="col-sm-4">
    <br>
    <h3 text-align:"center">Percentage of passed tests :</h3>
    <div class="rectangle">
    <div class="rectangleGraph"></div>
    </div>
    <p>${graphRatioRound} %</p>
  </div>
  <div class="col-sm-4">
    <br>
    <h3>Number of tests displayed on the website :</h3>
    <h4>${Totalfail + Totalpass}</h4>
    <br>
    <h3>Average time for each test :</h3>
    <h4>${averageTime.toString().slice(0,5)} seconds</h4>
  </div>
  <div class="col-sm-4">
    <br>
    <h4>The sum a of all passed test is :${Totalpass}</h4>
    <br>
    <h4>The sum of all failed tests is :${Totalfail}</h4>
    <br>
    <h4>${Totalpass} over ${Totalpass + Totalfail} tests were passed</h4>
  </div>
</div>
     `;
        }
    });
};