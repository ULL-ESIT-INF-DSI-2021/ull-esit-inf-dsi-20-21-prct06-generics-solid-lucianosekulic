class Rational {
    constructor(num1) {
        this.num1 = num1;
    }
    add(num1) {
        let result;
        for (let i = 0; i < num1.length; i++) {
            result += num1[i];
        }
        return result;
    }
    substract(num1) {
        let result;
        for (let i = 0; i < num1.length; i++) {
            result -= num1[i];
        }
        return result;
    }
    multiply(num1) {
        let result;
        for (let i = 0; i < num1.length; i++) {
            result *= num1[i];
        }
        return result;
    }
    divide(num1) {
        let result;
        for (let i = 0; i < num1.length; i++) {
            result /= num1[i];
        }
        return result;
    }
}
const test1 = new Rational([1, 2, 3]);
console.log(Rational);
for (let index = 0; index < Rational.length; index++) {
    //console.log(test1.this.getEffectible(index));
}
export {};
