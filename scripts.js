const form = document.querySelector("[data-form]"); // Select the form element
const result = document.querySelector("[data-result]"); // Select the result element

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

      if (isNaN(dividendNumber) || isNaN(dividerNumber) || dividerNumber === 0) { // Check if the numbers are valid
        throw new Error("Invalid number provided");
      }

      const divisionResult = dividendNumber / dividerNumber; // Perform the division
      if (!Number.isFinite(divisionResult)) { // Check if the result is a valid number
        throw new Error("Invalid division result");
      }

      const roundedResult = Math.floor(divisionResult); // Round down the result
      result.innerText = roundedResult; // Display the result
    } catch (error) {
      result.innerText = "Something critical went wrong. Please reload the page";
      result.style.position = "absolute";
      result.style.top = 0;
      result.style.left = 0;
      result.style.width = "100vw";
      result.style.height = "100vh";
      result.style.backgroundColor = "white";
      result.style.color = "black";
      result.style.display = "flex";
      result.style.justifyContent = "center";
      result.style.alignItems = "center";
      console.error(error); // Log the error to the console
      throw error; // Rethrow the error to propagate it further
    }
  }
});





