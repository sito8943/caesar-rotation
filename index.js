const prompt = require("prompt");

let input = 0;

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

  prompt.get(properties, (err, result) => {
    if (err) return onErr(err);

    input = result.input;

    console.log("Command-line input received:");
    work();
  });
} else work();

const work = () => {
  const DNI = `${input}-${letters[input % 23]}`;

  console.log(`Your DNI is: ${DNI}`);

  console.log("Press any key to exit");

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on("data", process.exit.bind(process, 0));
};

const onErr = (err) => {
  console.log(err);
  return 1;
};
