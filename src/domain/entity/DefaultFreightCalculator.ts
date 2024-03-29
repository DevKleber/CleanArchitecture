import { FreigthCalculator } from "./FreightCalculator";
import { Item } from "./Item";

export class DefaultFreightCalculator implements FreigthCalculator {
	calculate(item: Item): number {
		if (!item.width || !item.height || !item.length || !item.weight) return 0;
		const freightMinimum = 10;
		const freight = 1000 * item.getVolume() * (item.getDensity() / 100);
		return Math.max(freightMinimum, freight); // retorna o valor maior.
	}
}
