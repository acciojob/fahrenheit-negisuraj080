function toFahrenheit(celsius) {
 // Write your code here
	if (typeof celsius !== 'number' || isNaN(celsius)) {
        return 'Invalid input. Please provide a valid number.';
    }

    // Convert Celsius to Fahrenheit using the formula: (Celsius * 9/5) + 32
    const fahrenheit = (celsius * 9/5) + 32;

    // Return the result with two decimal points of precision
    return fahrenheit.toFixed(2);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
