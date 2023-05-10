// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    //Defining initial variables
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const shiftedArray = []
    const inputArray = input.toLowerCase().split("")
    //Returns false if the shift is any of the following conditions
    if(!shift || shift === 0 || shift < -25 || shift > 25){
      return false
    } 
    //Loops through the input and handles any spaces or nonalphabetic characters
    inputArray.forEach((character)=>{
      if(!alphabet.includes(character)){
        shiftedArray.push(character)
        return
      }
    //Defining shift variables
      const index = alphabet.indexOf(character)
      let shiftedIndex = index + shift
    //Changes the shift to negative if we are decoding(encode === false)
      if(encode === false){
        shiftedIndex = index - shift
      }
    //Loops the shift around to the start of alphabet if it ends up going past it
      if(shiftedIndex > 25){
        shiftedIndex -= 26
      }else if (shiftedIndex < 0){
        shiftedIndex += 26
      }
    //Pushs the encoded/decoded letters into the shiftedArray variable
      shiftedArray.push(alphabet[shiftedIndex])
    })
    //Returns the final result in a string form
    return shiftedArray.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
