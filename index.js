const prompt = require("prompt");

let input = "";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "A",
  "B",
  "C",
  "D",
];

// if exist argv 2
if (process.argv[2]) input = process.argv[2];

const properties = [
  {
    name: "input",
    validator: /^[a-zA-Z\s]+$/,
    warning: "Name must be only letters or spaces",
  },
];

if (input === "") {
  prompt.start();

  prompt.get(properties, (err, result) => {
    if (err) return onErr(err);

    input = result.input;

    console.log("Command-line input received:");
    work();
  });
} else work();

const work = () => {
  let rotation = "";
  for (let i = 0; i < input.length; ++i) {
    if (input.charAt(i) !== " ")
      rotation += alphabet[alphabet.indexOf(input.charAt(i).toUpperCase()) + 3];
    else rotation += input.charAt(i);
  }

  console.log(`Rotation is: ${rotation}`);

  console.log("Press any key to exit");

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on("data", process.exit.bind(process, 0));
};

const onErr = (err) => {
  console.log(err);
  return 1;
};
