const {caesar} = require("../src/caesar")
const expect = require("chai").expect

describe("caesar() error test submission by student", ()=>{
   
    // Error Handling Tests

    it("returns false if the shift value is equal to 0", ()=>{
        const actual = caesar("Hello", 0)
        const expected = false
        expect(actual).to.equal(expected)
    })

    it("returns false if the shift value is less than -25", ()=>{
        const actual = caesar("Hello", 50)
        const expected = false
        expect(actual).to.equal(expected)
    })

    it("returns false if the shift value is greater than 25", ()=>{
        const actual = caesar("Hello", 50)
        const expected = false
        expect(actual).to.equal(expected)
    })

    it("returns false if the shift value is missing", ()=>{
        const actual = caesar("Hello")
        const expected = false
        expect(actual).to.equal(expected)
    })

})

describe("caesar() encoding test submission by student", ()=>{

    // Encoding/decoding tests

    it("ignores capital letters", ()=>{
        const actual = caesar("MESSAGE", 1)
        const expected = "nfttbhf"
        expect(actual).to.equal(expected)
    })

    it("handles shifts that go past the end of the alphabet", ()=>{
        const actual = caesar("Zebra", 2)
        const expected = "bgdtc"
        expect(actual).to.equal(expected)
    })

    it("maintains spaces and other nonalphabetic symbols in the message", ()=>{
        const actual = caesar("A message!", 1)
        const expected = "b nfttbhf!"
        expect(actual).to.equal(expected)
    })
})