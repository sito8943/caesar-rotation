let input = 0;
// if exist argv 2
if (process.argv[2]) input = process.argv[2];
else {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: proces.stdout,
  });

  rl.question("Waiting for input: ", (numb) => {
    input = numb;
    rl.close();
  });
}

const DNI = String(input) + String(input % 23);
console.log("Your DNI is: ", DNI);

process.exit(0);
