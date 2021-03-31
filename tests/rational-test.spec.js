import "mocha";
import { expect } from "chai";
describe("add function tests", () => {
    let num = 1;
    it("add(1, 8) returns value 9", () => {
        expect(add([1, 8])).to.be.deep.equal(9);
    });
    it("substract(-1, 8) returns value 7", () => {
        expect(substract([-1, 8])).to.be.equal(7);
    });
    it("multiply(2, 2) returns value 4", () => {
        expect(multiply([2, 2])).to.be.equal(4);
    });
    it("divide(2, 2) returns value 1", () => {
        expect(multiply([2, 2])).to.be.equal(1);
    });
    //
    it("not to be add", () => {
        expect(add([1, 8])).to.be.not.equal(7);
    });
    it("not to be sustract", () => {
        expect(substract([-1, 8])).to.be.not.equal(5);
    });
    it("not to be mult", () => {
        expect(multiply([2, 2])).to.be.not.equal(7);
    });
    it("not to be div", () => {
        expect(multiply([2, 2])).to.be.not.equal(1);
    });
});
