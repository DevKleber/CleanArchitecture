import { Item } from "./Item";

export interface FreigthCalculator {
	calculate(item: Item): number;
}
