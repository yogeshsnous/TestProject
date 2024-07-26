import {describe, test, it, expect} from '@jest/globals';




describe("Test Operation", () => {
    const {addition} = require("../operations")
    it("additon 2 and 3", () => {

        const sum = addition(5,3)

        expect(sum).toEqual(8);
        
    })

    it('addition number 9 and 10', () => {

        const sum = addition(9,10)

        expect(sum).toEqual(19);
    })

    it('addition number -9 and 11', () => {

        const sum = addition(-9,11)

        expect(sum).toEqual(2);
    })
})

