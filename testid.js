const testId = async (ID) => {
    $.ajax({
        url :"http://localhost:3000/test",
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
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <form>
                        <input class="input" width="50%" id="name" placeholder="Name">     
                        <br>
                        <br>        
                        <textarea onKeyUp="comment(1)" class="input_2" id="comment" placeholder="Please enter a comment ..." rows="10" cols="70"></textarea>
                        <button class="button_1" >Submit</button>
                    </form>
                    <div id="error"></div>
                </div>
                <div class="col-sm">
                <br>
                <br>
                    The comments will be displayed here :
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, inventore quisquam amet ipsa totam delectus perferendis deleniti assumenda, beatae aliquam provident consequatur? Commodi nemo ducimus consequatur voluptatibus quam tempore esse?</p>
                </div>
            </div>
        </div>

        
</div>
        `
            }
    })
}


// Commenting functionalitie 

function comment(n){
    let name = document.getElementById('name').value.toUpperCase();
    let input = document.getElementById("comment").value;
    console.log(name);
    console.log(input);
    if(name==''){
    document.getElementById('error').innerHTML = 
    `
    <p color="red">Please enter a name !</p>
    `
    }
    };