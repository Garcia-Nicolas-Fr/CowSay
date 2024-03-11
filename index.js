const cowsay = require("cowsay");

const infos = require("./information");

console.log(
  cowsay.say({
    text: "Hello I'm " + infos.myName + " from " + infos.myCampus + " !",
    e: "oO",
    T: "U",
  })
);
