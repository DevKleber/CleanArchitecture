import { Order } from "../../domain/entity/Order";
import { CouponRepository } from "../../domain/repository/CouponRepository";
import { ItemRepository } from "../../domain/repository/ItemRepository";
import { OrderRepository } from "../../domain/repository/OrderRepository";
import { PlaceOrderInput } from "./PlaceOrderInput";
import { PlaceOrderOutput } from "./PlaceOrderOutput";

export class PlaceOrder {
	constructor(
		readonly itemRepository: ItemRepository,
		readonly orderRepository: OrderRepository,
		readonly coupon: CouponRepository
	) {}

	async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
		const order = new Order(input.cpf, input.date);

		for (const orderItem of input.orderItems) {
			const item = await this.itemRepository.findById(orderItem.idItem);
			if (!item) throw new Error("Item not found!");

			order.addItem(item, orderItem.quantity);
		}

		if (input.coupon) {
			const coupon = await this.coupon.findByCode(input.coupon);
			if (coupon) order.addCoupon(coupon);
		}

		await this.orderRepository.save(order);

		const output = new PlaceOrderOutput(order.getTotal());
		return output;
	}
}
