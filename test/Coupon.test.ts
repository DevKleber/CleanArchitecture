import { Coupon } from "../src/domain/entity/Coupon";

test("Deve criar um cupom de desconto válido", function () {
	const today = new Date("2022-12-02");
	const coupon = new Coupon("VALE20", 20, new Date("2022-12-10"));
	const isValid = coupon.isValid(today);
	expect(isValid).toBeTruthy();
});

test("Deve criar um cupom de desconto expirado", function () {
	const today = new Date("2022-12-02");
	const coupon = new Coupon("VALE20", 20, new Date("2022-12-01"));
	const isValid = coupon.isValid(today);
	expect(isValid).toBeFalsy();
});

test("Deve criar um cupom de desconto válido e calcular o desconto", function () {
	const coupon = new Coupon("VALE20", 20);
	const amount = coupon.calculateDiscount(1000);
	expect(amount).toBe(200);
});

test("Deve criar um cupom de desconto expirado e calcular o desconto", function () {
	const today = new Date("2022-12-02");
	const coupon = new Coupon("VALE20", 20, new Date("2022-12-01"));
	const amount = coupon.calculateDiscount(1000, today);
	expect(amount).toBe(0);
});
