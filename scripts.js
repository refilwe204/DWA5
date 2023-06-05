const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
  } else {
    try {
      const dividendNumber = parseFloat(dividend);
      const dividerNumber = parseFloat(divider);

      if (isNaN(dividendNumber) || isNaN(dividerNumber) || dividerNumber === 0) {
        throw new Error("Invalid number provided");
      }

      const divisionResult = dividendNumber / dividerNumber;
      if (!Number.isFinite(divisionResult)) {
        throw new Error("Invalid division result");
      }

      const roundedResult = Math.floor(divisionResult);
      result.innerText = roundedResult;
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
      console.error(error);
      throw error;
    }
  }
});




