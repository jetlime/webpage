// Commenting functionality

function comment(n) {
    let name = document.getElementById('name').value.toUpperCase();
    let input = document.getElementById("comment").value;
    console.log(name);
    console.log(input);
    if (name == '') {
        document.getElementById('error').innerHTML =
            `
    <p color="red">Please enter a name !</p>
    `
    }
};