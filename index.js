
var signupText = document.getElementById("signup-text-hide");
var signupForm = document.getElementById("signup-form");

  // Adds an on event styling change for multiple classes upon click.
  document.getElementById("signup-container").addEventListener("click", function (){
    signupText.style.visibility = "hidden"; // Hides our initial Join Up! text after the button is clicked and keeps the spacing so that it doesn't shrink.
    this.style.zIndex = "-1";              // Changes the index of the signup-container to -1 so that the container behind can fade through.
    this.style.transform = "scale(2.1)";   // Scales up the size first container to make it look as if its grown into an input form.
    this.style.outline = "none";          // Removes the aweful outline affect of clicking on a button.
    signupForm.style.opacity = "1";       // Brings the container behind the signup-container slowly into view by bringing its opacity back up.
  });
