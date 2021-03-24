import {Effectible} from './effectible';
import {EffectibleCollection} from './effectibleCollection';

class Rational<Rational> implements Effectible<Rational> {
	constructor(private num1: Rational[]) {}

	add(num1: Rational[]) {
		let result: Rational;
		for (let i = 0; i < num1.length; i++) {
			result += num1[i];  
		}
		return result;
	}

	substract(num1: Rational[]) {
		let result: Rational;
		for (let i = 0; i < num1.length; i++) {
			result -= num1[i];
		}
		return result;
	}
  multiply(num1: Rational[]) {
		let result: Rational;
		for (let i = 0; i < num1.length; i++) {
			result *= num1[i];
		}
		return result;
	}
  divide(num1: Rational[]) {
		let result: Rational;
		for (let i = 0; i < num1.length; i++) {
			result /= num1[i];
		}
		return result;
	}
}

