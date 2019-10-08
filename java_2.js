var test=[{
    pass: 1,
    fail : 5,
    time : 0.03,
    pass_fail: 20,
},{
    pass: 10,
    fail : 0,
    time : 0.09, 
    pass_fail: 100
},{
    pass: 15,
    fail : 0,
    time : 0.04, 
    pass_fail: 100,
},{
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 0
}];
// implementing the dynamic length of the object into the tittle :
document.getElementById("table_javascript").innerHTML = `
<h2 class="text"> Test Statistics (${test.length} results) :</h2>
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
${test.map(function(parameter) {
    return `

        <tr>
           <th>${parameter.}</th> 
           <th>${parameter.pass}</th>
           <th>${parameter.fail}</th>
           <th>${parameter.time}</th>
           <th>${parameter.pass_fail}</th>
        </tr>
    </div>`;
}).join("")}
</tbody>
</table>
`
 



