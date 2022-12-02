import { Coupon } from "./Coupon";
import { Cpf } from "./Cpf";
import { Item } from "./Item";
import { OrderItem } from "./OrderItem";

export class Order {
	cpf: Cpf;
	orderItems: OrderItem[];
	coupon: Coupon | undefined;

	constructor(cpf: string, readonly date: Date = new Date()) {
		this.cpf = new Cpf(cpf);
		this.orderItems = [];
	}

	addItem(item: Item, quantity: number): number {
		this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
		return 1;
	}

	getTotal(): number {
		let total = 0;
		for (const orderItem of this.orderItems) {
			total += orderItem.getTotal();
		}
		if (this.coupon) {
			total -= this.coupon.calculateDiscount(total, this.date);
		}
		return total;
	}

	addCoupon(coupon: Coupon) {
		if (!coupon.isValid(this.date)) return;

		this.coupon = coupon;
	}
}
