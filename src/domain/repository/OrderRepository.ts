import { Item } from "../entity/Item";
import { Order } from "../entity/Order";

export interface OrderRepository {
	save(order: Order): Promise<void>;
}
