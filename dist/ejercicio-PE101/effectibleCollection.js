export class EffectibleCollection {
    constructor(num1) {
        this.num1 = num1;
    }
    addEffectible(num1) {
        this.num1.push(num1);
    }
    getEffectible(index) {
        return this.num1[index];
    }
    getNumberOfEffectibles() {
        return this.num1.length;
    }
}
