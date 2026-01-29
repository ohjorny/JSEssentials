let count = 0; // Initialize count to 0

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Display count in HTML
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    }
    else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function increaseCount() {
    count++; //Increment count by 1
    displayCount(); //Display count
    checkCountValue(); //Check count value and display messages
}