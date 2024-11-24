// Import Luxon (via script tag)
const { DateTime } = luxon;

// Initialize Flatpickr
flatpickr("#birthdate", {
  dateFormat: "d/m/Y",
  defaultDate: new Date(2002, 10, 21), // Optional default date
});

// Add Event Listener to Form
document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get the selected birthdate
  const birthdateInput = document.getElementById("birthdate").value;

  // Validate the input
  if (!birthdateInput) {
    alert("Please select a valid birthdate.");
    return;
  }

  // Parse the birthdate using Luxon
  const birthdate = DateTime.fromFormat(birthdateInput, "d/M/yyyy");
  if (!birthdate.isValid) {
    alert("Invalid date format!");
    return;
  }

  // Get today's date
  const today = DateTime.now();

  // Calculate the age difference
  const diff = today.diff(birthdate, ["years", "months"]).toObject();

  // Display the result
  const resultText = `You are ${Math.floor(diff.years)} years and ${Math.floor(
    diff.months
  )} months old.`;
  document.getElementById("result").textContent = resultText;
});
