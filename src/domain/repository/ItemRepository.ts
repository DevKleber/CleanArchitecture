import { Item } from "../entity/Item";

export interface ItemRepository {
	findById(idItem: number): Promise<Item | undefined>;
}
