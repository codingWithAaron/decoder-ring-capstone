// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  

  function polybius(input, encode = true) {
    //Defining initial variables
    const cipher = {
      1: ["a", "f", "l", "q", "v"],
      2: ["b", "g", "m", "r", "w"],
      3: ["c", "h", "n", "s", "x"],
      4: ["d", "i", "o", "t", "y"],
      5: ["e", "k", "p", "u", "z"]
    };
    
    let result = []
    
    if(encode == true) {
      const inputArray = input.toLowerCase().split("")
      result = inputArray.map((letter)=>{
        for (let keys in cipher) {
          if(letter === " ") {
            return " "
          }
          if(letter == "i" || letter == "j") {
            return "42"
          }
          const number2 = cipher[keys].indexOf(letter)
          if(number2 >= 0){
            return `${keys}${number2 + 1}`
          }
        }
      })

    }

    if(encode == false){
      const inputWithoutSpaces = input.replace(" ", "");
      if (inputWithoutSpaces.length % 2 !== 0) return false;
      

      for (let i = 0; i < input.length; i +=2 ){
        let number1 = input[i]
        let number2 = input[i + 1]

        if (number1 === " "){
          result.push(" ");
          i -= 1
          continue;
        }
        
        if (number1 === "4" && number2 === "2") {
          result.push("ji");
        }else{
          let rowIndex = parseInt(number1) - 1;
          let colIndex = parseInt(number2) - 1;
          result.push(cipher[rowIndex + 1][colIndex]);
        }

      }
        

    }

    return result.join("")
    
  }

  return {
    polybius,
  };

})();

module.exports = { polybius: polybiusModule.polybius };
