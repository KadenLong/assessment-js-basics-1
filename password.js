const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkIt(str) {
  
    var pattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  if (pattern.test(str) === true) {
    str = "Yes";
  } else {
    str = "No";
  }
  return str;
}

reader.question(
  "Hello! Let's validate your password.\nMust contain 10 or more characters.\nMust contain ONLY ONE capital letter.\nMust contain at least one number.\nMust contain one or more of these special characters: -+_!@#$%^&*.,?\nPlease enter your password:  ",
  function (input) {
    if (input.length < 10 && checkIt(input) === "No") {
      console.log(
        " __  .__   __. ____    ____  ___       __       __   _______  \n|  | |  \\ |  | \\   \\  /   / /   \\     |  |     |  | |       \\ \n|  | |   \\|  |  \\   \\/   / /  ^  \\    |  |     |  | |  .--.  |\n|  | |  . `  |   \\      / /  /_\\  \\   |  |     |  | |  |  |  |\n|  | |  |\\   |    \\    / /  _____  \\  |  `----.|  | |  '--'  |\n|__| |__| \\__|     \\__/ /__/     \\__\\ |_______||__| |_______/ \n                                                              "
      );
      console.log(`Please use a different password.`);
    } else if (input.length >= 10 && checkIt(input) === "Yes") {
      console.log("____    ____  ___       __       __   _______  \n\\   \\  /   / /   \\     |  |     |  | |       \\ \n \\   \\/   / /  ^  \\    |  |     |  | |  .--.  |\n  \\      / /  /_\\  \\   |  |     |  | |  |  |  |\n   \\    / /  _____  \\  |  `----.|  | |  '--'  |\n    \\__/ /__/     \\__\\ |_______||__| |_______/ \n                                               ");
    } else{
        console.log(`Error`);
    }

    reader.close();
  }
);
