// Commenting functionality

function comment(n) {
    let name = document.getElementById('name').value.toUpperCase();
    let input = document.getElementById("comment").value;
    console.log(name);
    console.log(input);
    // Check if input condition hold
    if (name === "" || input === "") {
        document.getElementById('error').innerHTML = `
            alert('Please put your name in the form !')
        `
    } else {
        document.getElementById('error').innerHTML = `
            alert('Your comment was succesfully posted !')
        `
    };

};