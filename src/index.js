const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let cipher = [];
  for (let i = 0; i < expr.length; i += 10) {
    let char = expr.substr(i, 10);
    let str = "";
    for (let i = 0; i < char.length; i += 2) {
      if (char.substr(i, 2) === "10") {
        str = str + ".";
      } else if (char.substr(i, 2) === "11") {
        str = str + "-";
      } else if (char.substr(i, 2) === "00") {
        str = str + " ";
      }
    }
    cipher.push(str ? MORSE_TABLE[str.trim()] : " ");
  }
  return cipher.join("");
}

module.exports = {
  decode
};
