// Object defining the test details
var test=[{
    test_id : "password test",
    pass: 1,
    fail : 5,
    time : 0.03,
    pass_fail: 20,
},{
    test_id : "Form testing",
    pass: 10,
    fail : 0,
    time : 0.09, 
    pass_fail: 100
},{
    test_id : "Login Test 2",
    pass: 15,
    fail : 0,
    time : 0.04, 
    pass_fail: 100,
},{
    test_id : "Pen Test",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 0
},{
    test_id : "Pen Test 2",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 0
},{
    test_id : "Pen Test 3",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 0
},{
    test_id : "Login Test 4",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 0
},{
    test_id : "Pen Test 4",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 0
}];






// implementing the dynamic data from the objects in the table and the title
document.getElementById("table_javascript").innerHTML = `
<div>
<h2 class="text"> 
<button class='button_2 accordion'> <img src="arrow -down.png" alt="Minimize the page">
Test Statistics (${test.length} results) :
</h2>
</button>
</div>
<div class='panel'>
<div class="my_form">
<input type="text" name="search" id="myInput" placeholder=" Search.." onkeyup="searchFun()">
<div class='table_1'>
<table id="myTable">
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
           <th>${parameter.test_id}</th> 
           <th>${parameter.pass}</th>
           <th>${parameter.fail}</th>
           <th>${parameter.time}</th>
           <th>${parameter.pass_fail}</th>
        </tr>
</div>`;
}).join("")}
</tbody>
</table>
</div>
`

 
// filter for the search functionality

const searchFun = () =>{
    let filter = document.getElementById('myInput').value.toUpperCase();

    let myTable = document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let th = tr[i].getElementsByTagName('th')[0];

        if(th){
            let textvalue = th.textContent || th.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1 ){
                tr[i].style.display = " ";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

// implement accordion view

var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        //toggle between adding and removing the active class
        this.classList.toggle("active");
        //toggle between hidding and showing the panel
        var panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        }
    });
}
