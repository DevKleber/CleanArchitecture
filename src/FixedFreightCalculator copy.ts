import { FreigthCalculator } from "./FreightCalculator";

export class FixedFreightCalculator implements FreigthCalculator {
	calculate(): number {
		return 10;
	}
}
