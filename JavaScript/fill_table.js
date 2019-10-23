// Object defining the test details
var test=[{
    test_id: "password test",
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
    pass_fail: 1
},{
    test_id : "Pen Test 3",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 40
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
    pass_fail: 80
},{
    test_id : "Pen Test 4",
    pass: 119,
    fail : 2,
    time : 0.04, 
    pass_fail: 0
}];



// implementing the dynamic data from the objects in the table and the title
document.getElementById("table_javascript").innerHTML = `
<div class='accodion'>
    <button class='accordion_button'>
        <h2 class="text">Test Statistics (${test.length} results) :</h2>
    </button>

    <div class='accordion_content'>
        <div class='row my-row_3'>
        </div>
        <div class="my_form">
            <input type="text" name="search" id="myInput" placeholder=" Search.." onkeyup="searchFun()">
        </div>
        <div class='table_1'>
            <table id='mySortedTable'>
                <thead id='myHead'>
                    <tr>
                        <th>Total</th>
                        <th>Pass</th>
                        <th>Fail</th>
                        <th>Time needed</th>
                        <th>Pass/Fail ratio</th>
                    </tr>
                </thead>
                <tbody id="myTable">
        ${test.map(function(parameter) {
            return `
                    <tr>
                        <th id='sortTh'>${parameter.test_id}</th> 
                        <th>${parameter.pass}</th>
                        <th>${parameter.fail}</th>
                        <th>${parameter.time}</th>
                        <th>
                            <div class='myProgress'>
                                <div style="background-color:#4CAF50; width:${parameter.pass_fail}%;">${parameter.pass_fail}%</div>
                            </div>
                        </th>
                    </tr>
        </div>`;
        }).join("")}
                </tbody>
            </table>
    </div>
    <button class="button_1" type="button"><a href="index.html">Refresh</a></button> 
    <!--START of pagination tags-->
          <nav aria-label="...">
              <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                  <span class="page-link">Previous</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                  <span class="page-link">
                    2
                    <span class="sr-only">(current)</span>
                  </span>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
    <!--END of pagination tags-->
</div>
<!--<script type="text/javascript" src="http://localhost"-->
`
//createProgress(parameter.pass_fail)




// filter for the search functionality

const searchFun = () =>{
    let filter = document.getElementById('myInput').value.toUpperCase();
    console.log(filter)
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

//function that sorts the table by clicking on the header

const sortFunction = () =>{
    let tr = document.getElementById('myTable');
    console.log(tr);
    let thead = document.getElementById('myHead');
    console.log(thead);
    thead.addEventListener('click', () =>{
        console.log('Your click was recognized !')
        });
}

//<script type="text/javascript" src="/gs_sortable.js"></script>
//<script type="text/javascript">
//<!--
//var TSort_Data = new Array ('mySortedTable', 's', 'i', 'f');
//tsRegister();
// -->
//</script>

// sort by name


// function that takes the pass/fail ratio from the objects to respectively 
// replaces the width in style form the 'myBar'class. E.G : If the pass/fail ratio is 20
// then the width in the style from the 'myBar' class will be 20. The result will be a progress
// bar of 20 percent.

//const createProgress =(percent) => {
      //  myBar.style.width = percent +'%';
    //    console.log(myBar.style.width);
  //      return document.innerHTML =`
      //  <div style=''>
        //   <div></div> 
    //    </div>
  //      `
//}

// implement accordion view
document.querySelectorAll('.accordion_button').forEach(button =>{
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling ;

        button.classList.toggle('accordion_button--active');

        if(button.classList.contains('accordion_button--active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px' ;
        }else{
            accordionContent.style.maxHeight = 0 ;
        }
    });
});

