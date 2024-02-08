let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celcius = fahrenheit.map((far) => Math.round((far - 32) / 1.8));

console.log(celcius);
