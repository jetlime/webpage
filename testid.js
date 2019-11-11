const testId = async (ID) => {
    $.ajax({
        url :"http://localhost:3000/test/",
        method: 'GET',
        mode: 'no-cors',
        dataType: 'jsonp',
            success:function(data){
                console.log(data);
                test = data.test
        document.getElementById('testid').innerHTML = `
        <div class="idpage">${test[ID].test_id}</div>
        <br>
        <hr width="60%" size="2" color="#4CAF50">
        <br>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h2>Average time : </h2>
                    <br>
                    ${test[ID].time} seconds
                </div>
                <div class="col-sm">
                    <h2>Passed tests :</h2>
                    <br>
                    ${test[ID].pass}
                </div>
                <div class="col-sm">
                    <h2>Failed Test :</h2>
                    <br>
                    ${test[ID].fail}
                </div>
                <div class="col-sm">
                    <h2>Ratio :</h2>
                    <br>
                    <div class='myProgress'>
                    <div style="background-color:#4CAF50; width:${test[ID].pass_fail}%;">${test[ID].pass_fail}%</div>
                    </div>
                </div>
            </div>
        </div>  
        <br>
        <br> 
        <div>
        <input width="50%" id="comment" placeholder="Input a commentary...">     
        </div>
        `
            }
    })
}