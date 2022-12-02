import { Coupon } from "../src/Coupon";

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
