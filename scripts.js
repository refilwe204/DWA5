const form = document.querySelector("[data-form]"); // Select the form element
const result = document.querySelector("[data-result]"); // Select the result element

// Display "NO calculation performed" at the bottom initially
result.innerText = "NO calculation performed";

form.addEventListener("submit", (event) => { // Add a submit event listener to the form
  event.preventDefault(); // Prevent the form from being submitted

  // Get the values from the form inputs using FormData
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) { // Check if both values are present
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
  } else {
    try {
      const dividendNumber = parseFloat(dividend); // Convert dividend to a number
      const dividerNumber = parseFloat(divider); // Convert divider to a number

      if (dividerNumber <3) {
        throw new Error("Division not performed. Invalid number provided. Try again");
      }

      const divisionResult = dividendNumber / dividerNumber; // Perform the division
      if (!Number.isFinite(divisionResult)) { // Check if the result is a valid number
        throw new Error("Something critical went wrong, Please reload the page");
      }

      const roundedResult = Math.floor(divisionResult); // Round down the result
      result.innerText = roundedResult.toString(); // Display the result
    } catch (error) {
      result.innerText = error.message;
      console.error(error); // Log the error to the console
    }
  }
});




     