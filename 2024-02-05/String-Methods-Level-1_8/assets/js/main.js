const text = "Sam is going to codingschool";

const textPart1 = text.slice(0, 4);
const textPart2 = text.slice(4, 16);
const textPart3 = text.slice(22);
const completeSentence = textPart1 + textPart2 + textPart3;

document.write(completeSentence.toLocaleUpperCase() + "<br /> ");
document.write(completeSentence.toLocaleLowerCase() + "<br /> ");
document.write(
  textPart1.toLocaleUpperCase() +
    textPart2.toLowerCase() +
    textPart3.toLocaleUpperCase() +
    "<br /> "
);
document.write(
  textPart1.toLowerCase() +
    textPart2.toLocaleUpperCase() +
    textPart3.toLowerCase() +
    "<br /> "
);

// capitalize the first letter of each word:

const finalSentence = completeSentence.replace(
  /(^\w{1})|(\s+\w{1})/g,
  (letter) => letter.toUpperCase()
);
document.write(finalSentence);
