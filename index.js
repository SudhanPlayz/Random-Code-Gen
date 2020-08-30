function RandomCodeGen(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function LetterGen(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function number(length) {
  var result = "";
  var characters =
    "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function RandomLengthRandomGen(){
  let length = parseInt(number(7));
  return RandomCodeGen(length);
}
function RandomLengthLetterGen(){
   let length = parseInt(number(7));
  return LetterGen(length);
}
const functions = {
  random: RandomCodeGen,
  number: number,
  letter: LetterGen,
  Rrandom: RandomLengthRandomGen,
  Rletter: RandomLengthLetterGen
}

module.exports = functions;
