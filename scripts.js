const form = document.querySelector("[data-form]"); // Select the form element
const result = document.querySelector("[data-result]"); // Select the result element

// Display "NO calculation performed" at the bottom initially
result.innerText = "NO calculation performed";

/**
 * Event listener for the form submission.
 * @param {Event} event - The submit event object.
 */

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from being submitted

  // Get the values from the form inputs using FormData
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    // Check if both values are present
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
  } else {
    try {
      /**
       * Convert the dividend to a number.
       * @typedef {number}
       */
      const dividendNumber = parseFloat(dividend);

      /**
       * Convert the divider to a number.
       * @typedef {number}
       */
      const dividerNumber = parseFloat(divider);

      if (dividerNumber < 3) {
        throw new Error("Division not performed. Invalid number provided. Try again");
      }

      /**
       * Perform the division.
       * @typedef {number}
       */
      const divisionResult = dividendNumber / dividerNumber;

      if (!Number.isFinite(divisionResult)) {
        // Check if the result is a valid number
        throw new Error("Something critical went wrong. Please reload the page");
      }

      /**
       * Round down the result.
       * @typedef {number}
       */
      const roundedResult = Math.floor(divisionResult);

      result.innerText = roundedResult.toString(); // Display the result
    } catch (error) {
      result.innerText = error.message;
      console.error(error); // Log the error to the console
    }
  }
});





     