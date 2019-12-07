// Integration testing
describe("Test array",function(){
    it("is defined",async function(){
        $.ajax({
            url: "http://localhost:3000/test",
            method: "GET",
            mode: "no-cors",
            dataType:'jsonp',
            success:function(data){
                let test =  data.test;
                expect(test).toBeDefined();
            }
        })
        
    })
})