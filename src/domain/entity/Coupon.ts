export class Coupon {
	constructor(readonly code: string, readonly percentage: number, readonly expireDate?: Date) {}

	isValid(today: Date = new Date()) {
		if (!this.expireDate) return true;

		return this.expireDate.getTime() >= today.getTime();
	}

	calculateDiscount(amount: number, today: Date = new Date()) {
		if (!this.isValid(today)) return 0;
		return (amount * this.percentage) / 100;
	}
}
