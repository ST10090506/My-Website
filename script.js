var currentDate = new Date();

var options = { year: "numeric", month: "long", day: "numeric" };
var formattedDate = currentDate.toLocaleDateString("en-US", options);

var footer = document.querySelector("footer");
footer.innerHTML += "<p>Current Date: " + formattedDate + "</p>";

// Clears text fields on click
function clearInitialValue(element) {
  if (element.value === element.defaultValue) {
    element.value = "";
  }
}

// Validates the form on submission
function validateForm() {
  var firstname = document.forms["contactForm"]["Firstname"].value;
  var lastname = document.forms["contactForm"]["Lastname"].value;
  var email = document.forms["contactForm"]["Email"].value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (firstname === "" || lastname === "" || email === "") {
    alert("Name and Email are required fields!");
    return false;
  }

  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address!");
    return false;
  }
}

// Set the date for the countdown (replace with your desired date and time)
var countdownDate = new Date("NOV 30, 2023 23:59:59").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function () {
  // Get the current date and time
  var currentDate = new Date().getTime();

  // Calculate the remaining time
  var timeRemaining = countdownDate - currentDate;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown-timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown-timer").innerHTML = "EXPIRED";
  }
}, 1000); // Update every second

var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
window.scrollTo({top: 0, behavior: "smooth"});
});

var currentImageIndex = 0;
var images = document
  .getElementById("image-slideshow")
  .getElementsByTagName("img");

function showNextImage() {
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = "block";
}

function showPreviousImage(){
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex - 1+ images.length) %images.length;
  images[currentImageIndex].style.display = "block";
}

var shareButton = document.getElementById("shareButton");

shareButton.addEventListener("click", function () {
  var subject = encodeURIComponent("Check Out Lifeline Health Center");
  var body = encodeURIComponent(
    "I found this amazing health center called Lifeline! Contact them for more information:\n\n" +
      "Email: lifelinehealth@ngo.com\n" +
      "Phone Number: 011 234 5678\n" +
      "Address: 123 Lifeline Ave."
  );

  var mailtoLink = "mailto:?subject=" + subject + "&body=" + body;

  // Open default email client with pre-filled email
  window.location.href = mailtoLink;
});
