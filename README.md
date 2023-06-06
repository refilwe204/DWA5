# DWA5

# Division calculator

This is a simple JavaScript code snippet that performs calculations based on user input. It includes error handling for invalid and division by zero.

- [DWA5](#dwa5)
- [Division calculator](#division-calculator)
  - [The following is required :](#the-following-is-required-)
  - [Features](#features)
  - [User story](#user-story)
  - [Getting Started](#getting-started)
  - [Usage](#usage)


## The following is required :

- Open an IDE [Visual Studio Code](https://code.visualstudio.com/)
- Basic (HTML,CSS and JavaScript)(https://developer.mozilla.org/en-US/docs/Web/JavaScript/learn )
- A browser like [Chrome](https://www.google.com/chrome/)

## Features

DOM Manipulation:
Use document.querySelector to select elements based on data attributes.
Assign selected elements to variables.

Event Handling:
Add an event listener to the form's submit event using addEventListener.
Execute a callback function when the event occurs.

Form Data Retrieval:
Use FormData to retrieve form data on submit.
Destructure the values of specific form inputs.

Input Validation:
Check if both dividend and divider values are provided.
Display an error message if either value is missing.

Error Handling:
Use a try-catch block to handle potential errors during division calculation.
Display error messages in the result element.
Log errors to the console.

Division Calculation:
Perform the division calculation using the extracted values.
Round down the result using Math.floor.
Display the rounded result in the result element.

Styling and UI Modifications:
Modify the position, size, and styling of the result element in case of critical errors.
Set the element to cover the entire viewport with a white background and black text.
Center the error message using flexbox.


## User story

Resolved Stories
Scenario: Starting program state

-GIVEN that the submit button has not been pressed yet
-AND the code has just loaded
-THEN “NO calculation performed” should be displayed at the bottom
Scenario: Dividing numbers result in a whole number

-GIVEN that the submit button is pressed
-WHEN 20 is entered into the first input
-AND 10 is entered into the second input
-THEN 2 should be displayed at the bottom
 
Unresolved Stories
Scenario: Dividing numbers result in a decimal number

-GIVEN that the submit button is pressed
-WHEN 20 is entered into the first input
-AND 3 is entered into the second input
-THEN the number 6 with no decimal should be shown
 

Scenario: Validation when values are missing

-GIVEN that the submit button is pressed
-WHEN either or both inputs are empty
-THEN the divisions should not be done
-AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.
 

Scenario: An invalid division should log an error in the console

-GIVEN that the submit button is pressed
-WHEN 20 is entered into the first input
-AND -3 is entered into the second input
-THEN the division should not be done
-AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
-AND an error should be logged in the browser console that shows the call stack
-BUT the program should not crash entirely
 

Scenario: Providing anything that is not a number should crash the program

-GIVEN that the submit button is pressed
-WHEN ‘YOLO’ is entered into the first input
-AND ‘+++’ is entered into the second input
-THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
-AND an error should be logged in the browser console that shows the call stack.

## Getting Started
- Open a github folder and add a Read.me
- Clone a repository on GitHub desktop
- Open VS code 
- Open your file for your HTML and JavaScript code
- Copy the codes from the LMS
- Start Debugging 

## Usage
- Include the JavaScript code in your HTML file or JavaScript project.
- Ensure that you have the necessary HTML elements in your document: a form element with data-form attribute and input fields for dividend and divider, and a result element with data-result attribute to display the calculated result.
- Add an event listener to the form's submit event, which will trigger the division calculation.
- When the form is submitted, the code will prevent the default form submission behavior, extract the input values, and perform the division calculation.
- If both dividend and divider values are provided, the code will calculate the division result, round it down to the nearest whole number, and display the result in the designated result element.
- If any errors occur during the calculation, an error message will be displayed, and the page will be stylized with a white background and black text to indicate the critical error.


License
This code is released under the MIT License, which means you are free to use, modify, and distribute it as you see fit.