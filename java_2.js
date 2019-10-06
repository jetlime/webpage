var test=[{
    pass: 1,
    fail : 5,
    time : 0.03,
    pass_fail: 20,
},{
    "pass": 10,
    "fail" : 0,
    "time" : 0.09, 
    "pass_fail": 100,
}];
// implementing the dynamic length of the object into the tittle :
document.getElementById("table_javascript").innerHTML = `
<h2 class="text"> Test Statistics (${test.length} results) :</h2>
${test.map(function(parameter) {
    return `
    <div class='table_1'>
    <table>
    <thead>
        <tr>
            <th>Total</th>
            <th>Pass</th>
            <th>Fail</th>
            <th>Time needed</th>
            <th>Pass/Fail ratio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
           <th>Test 1</th> 
           <th>${test.pass}</th>
           <th>${test.fail}</th>
           <th>${test.time}</th>
           <th>${test.pass_fail}</th>
        </tr>
        <tr>
            <th>Test 2</th>
            <th>Yes</th>
            <th>NO</th>
            <th>3.9s</th>
            <th>90%</th>
        </tr>
        <tr>


        </tr>

    </tbody>
</table>
    </div>`;
}).join("")}

`
 



