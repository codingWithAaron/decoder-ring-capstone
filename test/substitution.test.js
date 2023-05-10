const {substitution} = require("../src/substitution")
const expect = require("chai").expect

describe("substitution() tests written by student",()=>{

    it("returns false if the given alphabet isn't exactly 26 characters long", ()=>{
        const actual = substitution("hello", "ssddfgeerrsa", encode = true)
        const expected = false
        
        expect(actual).to.equal(expected)
    })

    it("correctly translates the given phrase, based on the alphabet given",()=>{
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"

        expect(actual).to.equal(expected)
    })

    it("returns false if there are any duplicate characters in alphabet", ()=>{
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcab")
        const expected = false

        expect(actual).to.equal(expected)
    })

    it("maintains spaces in the message, before and after encode or decode", ()=>{
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "elp xhm xf mbymwwmfj dne"

        expect(actual).to.equal(expected)
    })

    it("ignores capital letters", ()=>{
        const actual = substitution("ThInKfUl", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"

        expect(actual).to.equal(expected)       
    })

})