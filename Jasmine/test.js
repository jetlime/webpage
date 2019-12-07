// Integration testing

describe("Test array",function(){
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
})

