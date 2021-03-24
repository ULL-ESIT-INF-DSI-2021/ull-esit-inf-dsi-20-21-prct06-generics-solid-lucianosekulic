import {Effectible} from './effectible';

export class EffectibleCollection<T extends Effectible<T>> {

	constructor(private num1: T[]) {}

	addEffectible(num1: T){
		this.num1.push(num1);
	}
	getEffectible(index: number) {
		return this.num1[index];
	}

	getNumberOfEffectibles() {
		return this.num1.length;
	}
}

