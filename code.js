// Create a new button element
var button = document.createElement("button");
button.innerHTML = "Click Me";

// Get the first element with the class name "ui items simPanel"
var elements = document.getElementsByClassName("ui items simPanel");
if (elements.length > 0) {
  var targetElement = elements[0];

  // Append the button to the target element
  targetElement.appendChild(button);
} else {
  console.log("No elements found with the specified class name.");
}
