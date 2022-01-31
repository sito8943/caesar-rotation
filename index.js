const prompt = require("prompt");

let input = 0;

// letters
letters = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

// if exist argv 2
if (process.argv[2]) input = process.argv[2];

const properties = [
  {
    name: "input",
    validator: /[0-9]/,
    warning: "Number must be only numbers",
  },
];

if (input === 0) {
  prompt.start();

  prompt.get(properties, function (err, result) {
    if (err) {
      return onErr(err);
    }
    input = result.input;

    console.log("Command-line input received:");

    const DNI = `${input}-${letters[input % 23]}`;

    console.log(`Your DNI is: ${DNI}`);
    process.exit(0);
  });
} else {
  const DNI = `${input}-${letters[input % 23]}`;

  console.log("Your DNI is: ", DNI);
  process.exit(0);
}

onErr = (err) => {
  console.log(err);
  return 1;
};
