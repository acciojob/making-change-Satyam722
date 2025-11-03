const makeChange = (c) => {
  // Convert input to number (because prompt() gives string)
  c = Number(c);

  // Create an object to store change
  const change = {};

  // Quarters (25¢)
  change.q = Math.floor(c / 25);
  c = c % 25;

  // Dimes (10¢)
  change.d = Math.floor(c / 10);
  c = c % 10;

  // Nickels (5¢)
  change.n = Math.floor(c / 5);
  c = c % 5;

  // Pennies (1¢)
  change.p = c;

  // Return the object
  return change;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
