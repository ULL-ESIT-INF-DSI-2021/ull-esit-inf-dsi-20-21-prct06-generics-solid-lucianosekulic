import "mocha";
import { expect } from "chai";
import { Marvel } from "../src/ejercicio-1/marvel";
import { Pokemon } from "../src/ejercicio-1/pokemon";
import { Starwars } from "../src/ejercicio-1/starwars";
describe("Definitive combat tests", () => {
    /*
      Ejemplo:
      let test = new Marvel(Fighter1, name, weigth, size, type, universe, [attack, deffense, speed, hp]);
    */
    let testMarvel = new Marvel("Fighter1", "thor", 120, 180, "marvel", "marvel", [10, 10, 12, 100]);
    let testPokemon = new Pokemon("Fighter1", "treeko", 120, 180, "pokemon", "pokemon", [6, 8, 10, 100]);
    let testStarwars = new Starwars("Fighter1", "luke", 120, 180, "starwars", "starwars", [12, 10, 14, 100]);
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
