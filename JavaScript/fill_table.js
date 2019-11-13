// Fetching data from localhost :
const userAction = async () => {
  $.ajax({
            url:"http://localhost:3000/test",
            method:"GET",
			mode: "no-cors",
      dataType: 'jsonp',
            error:function(data){
              console.log("Error, UNABLE to fetch data from the server. Verify if the server listens on port 3000.")
              document.getElementById('table_javascript').innerHTML = `
              <p class='error'>ERROR</p>
              <br>
              <p class="error2" >It was not possible to fetch the data from the localserver. Please check if the server listens on port 3000.</p>
              `
            },
            success:function(data){
          console.log(data.test);
          test = data.test;
          console.log(test);
          
       
// Implementing the dynamic data from the objects in the table and the title
document.getElementById("table_javascript").innerHTML = `
<div class='accodion'>
    <button onClick="accordion()"  class='accordion_button'>
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
        ${test
          .map(function(parameter) {
            return `  
                    <tr id="myTD">
                        <th><a target="_blank" href='http://localhost:3000/test/${parameter.id}'>${parameter.test_id}</a></th> 
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
          })
          .join("")}
                </tbody>
            </table>
    </div> 
</div>
`;
}
});
};

// Filter for the search functionality

const searchFun = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();
  console.log(filter);
  let myTable = document.getElementById("myTable");

  let tr = myTable.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let th = tr[i].getElementsByTagName("th")[0];

    if (th) {
      let textvalue = th.textContent || th.innerHTML;

      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "table-row";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

// Function that sorts the table by clicking on the header

function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
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
    for (i = 0; i < rows.length - 1; i++) {
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
    for (i = 0; i < rows.length - 1; i++) {
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

const accordion = () => {
  // implement accordion view
  document.querySelectorAll(".accordion_button").forEach(button => {
    button.addEventListener("click", () => {
      const accordionContent = button.nextElementSibling;
      button.classList.toggle("accordion_button--active");

      if (button.classList.contains("accordion_button--active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = 0;
      }
    });
  });
}
