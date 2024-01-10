// Function to toggle the display of the navigation menu
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Function to show event details through an alert
function showEventDetails(eventDetails) {
  alert(eventDetails);
}

// Function to handle form submission, show submission alert, and reset the form
function submitForm(event) {
  event.preventDefault();
  alert("Form submitted! We'll get back to you soon.");
  document.getElementById("contactForm").reset(); 
}

// Function to show visa details through an alert
function showVisaDetails(duration, description) {
  alert(`Visa Details:\nDuration: ${duration}\nDescription: ${description}`);
}
