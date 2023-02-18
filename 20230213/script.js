// Define a function to change the color of the header
function changeHeaderColor() {
  var header = document.querySelector('header');
  header.style.backgroundColor = 'red';
}

// Attach the function to a button click event
var button = document.querySelector('button');
button.addEventListener('click', changeHeaderColor);
