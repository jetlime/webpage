// Integration testing

/*describe("Test array",function(){
    it("is defined",function(){
        let url = 'http://localhost:3000/test';
            fetch(url, { 
                method: 'GET',
                mode: "no-cors",
                dataType: 'jsonp',
                success: function(data) {
                    expect(1).toBe(1) 
                }
            })
    })
})*/

describe("Sort table",function(){
    it("works",function(){
        let table = document.getElementById("myTable");
        sortingTable(1);
        let rows = table.rows;
        x = rows[i].getElementsByTagName("th")[1];
        y = rows[i + 1].getElementsByTagName("th")[1];
        expect(x).toBeGreaterThan(y);
    })  
})
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