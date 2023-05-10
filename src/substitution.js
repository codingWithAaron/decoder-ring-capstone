// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  function substitution(input, alphabet="", encode = true) {
    const standardA = "abcdefghijklmnopqrstuvwxyz"
    const result = []
    const inputArray = input.toLowerCase().split("")

    //Tests if the alphabet parameter is exactly 26 characters
    if(alphabet.length !== 26){
      return false
    }

    if(alphabet && encode == true){
      //Tests if all characters in the alphabet parameter are unique
      const charSet = new Set()
      for(let i = 0; i < alphabet.length; i++){
        if (charSet.has(alphabet[i])){
          return false
        }
        charSet.add(alphabet[i])
      }

      //Encodes the input
      inputArray.forEach((character)=>{
        if(!alphabet.includes(character)){
          result.push(character)
          return
        }
        //locate the input character in the standard alphabet (standardA) string
        //take that index postion number and return the letter from the corresponding position in substituion alphabet (alphabet)
        result.push(alphabet[standardA.indexOf(character)])
      })
    }

    if(alphabet && encode == false){
      //Tests if all characters in the alphabet parameter are unique
      const charSet = new Set()
      for(let i = 0; i < alphabet.length; i++){
        if (charSet.has(alphabet[i])){
          return false
        }
        charSet.add(alphabet[i])
      }

      //Decodes the input
      inputArray.forEach((character)=>{
        if(!alphabet.includes(character)){
          result.push(character)
          return
        }
        //Basically the opposite of encode on line 36 
        result.push(standardA[alphabet.indexOf(character)])
      })

    }


    return result.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
