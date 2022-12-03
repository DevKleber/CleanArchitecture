import { Coupon } from "./Coupon";
import { Cpf } from "./Cpf";
import { FreigthCalculator } from "./FreightCalculator";
import { Item } from "./Item";
import { OrderItem } from "./OrderItem";

export class Order {
	cpf: Cpf;
	orderItems: OrderItem[];
	coupon: Coupon | undefined;
	private freight: number;

	constructor(cpf: string, readonly date: Date = new Date()) {
		this.cpf = new Cpf(cpf);
		this.orderItems = [];
		this.freight = 0;
	}

	addItem(item: Item, quantity: number): void {
		this.freight += FreigthCalculator.calculate(item) * quantity;
		this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
	}
	getFreight() {
		return this.freight;
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
