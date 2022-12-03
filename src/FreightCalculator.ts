import { Item } from "./Item";

export class FreigthCalculator {
	static calculate(item: Item) {
		const freightMinimum = 10;
		const freight = 1000 * item.getVolume() * (item.getDensity() / 100);
		return Math.max(freightMinimum, freight); // retorna o valor maior.
	}
}
