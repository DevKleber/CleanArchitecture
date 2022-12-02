export class Coupon {
	constructor(
		readonly code: string,
		readonly percentage: number,
		readonly expireDate?: Date
	) {}

	isValid(today: Date = new Date()) {
		if (!this.expireDate) return true;

		return this.expireDate.getTime() >= today.getTime();
	}

	applyDiscount(amount: number) {
		return (amount * this.percentage) / 100;
	}
}
