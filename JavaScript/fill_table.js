// Object defining the test details
var test = [{
    test_id: "password test",
    pass: 1,
    fail: 5,
    time: 0.03,
    pass_fail: 20,
}, {
    test_id: "Form testing",
    pass: 10,
    fail: 0,
    time: 0.09,
    pass_fail: 100
}, {
    test_id: "Login Test 2",
    pass: 15,
    fail: 0,
    time: 0.04,
    pass_fail: 100,
}, {
    test_id: "Pen Test",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 0
}, {
    test_id: "Pen Test 2",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 1
}, {
    test_id: "Pen Test 3",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 40
}, {
    test_id: "Login Test 4",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 0
}, {
    test_id: "Pen Test 4",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 80
}, {
    test_id: "Pen Test 4",
    pass: 119,
    fail: 2,
    time: 0.04,
    pass_fail: 0
}];


// Implementing the dynamic data from the objects in the table and the title
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
                        <td onClick="sortTable(0)">Total <i class="fas fa-sort toggle"></i></td>
                        <td onClick="sortingTable(1)">Pass <i class="fas fa-sort toggle"></i></td>
                        <td onClick="sortingTable(2)">Fail <i class="fas fa-sort toggle"></i></td>
                        <td onClick="sortingTable(3)">Time needed <i class="fas fa-sort toggle"></i></td>
                        <td onClick="sortingTable(4)">Pass/Fail ratio</td>
                    </tr>
                </thead>
                <tbody id="myTable">
        ${test.map(function (parameter) {
    return `
                    <tr id="myTD">
                        <th>${parameter.test_id}</th> 
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



// filter for the search functionality

const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();
    console.log(filter)
    let myTable = document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let th = tr[i].getElementsByTagName('th')[0];

        if (th) {
            let textvalue = th.textContent || th.innerHTML;

            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "table-row";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Function that sorts the table by clicking on the header

function sortTable(n) {

    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 0; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("th")[n];
            y = rows[i + 1].getElementsByTagName("th")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

// Sorts table for numerical values :
function sortingTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("th")[n];
        y = rows[i + 1].getElementsByTagName("th")[n];
        //check if the two rows should switch place:
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
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
document.querySelectorAll('.accordion_button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion_button--active');

        if (button.classList.contains('accordion_button--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});

