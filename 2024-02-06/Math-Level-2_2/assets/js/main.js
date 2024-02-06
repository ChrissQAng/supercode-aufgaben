const compaireGuess = () => {
  const userGuess = Number(prompt("Schätzen Sie eine Zahl zwischen 1 und 10"));
  const computerGuess = Math.ceil(Math.random() * 10);
  console.log({ userGuess }, { computerGuess });
  if (userGuess === computerGuess) {
    console.log(
      `Du hast gewonnen, der Computer hat auch die Zahl ${computerGuess} geraten!`
    );
  } else {
    console.log(
      `Du hast verloren, der Computer hat die Zahl ${computerGuess} geraten!`
    );
  }
};
compaireGuess();
