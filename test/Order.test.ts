import { Coupon } from "../src/Coupon";
import { Item } from "../src/Item";
import { Order } from "../src/Order";

const cpf = "839.435.452-10";
const order = new Order(cpf);

order.addItem(new Item(1, "Música", "CD", 30), 3);
order.addItem(new Item(2, "Vídeo", "DVD", 50), 1);
order.addItem(new Item(3, "Vídeo", "VHS", 10), 2);

const total = order.getTotal();

test("Deve criar um pedido vazio com CPF válido", () => {
	const cpf = "839.435.452-10";
	const order = new Order(cpf);
	const total = order.getTotal();
	expect(total).toBe(0);
});

test("Deve tentar criar um pedido vazio com CPF inválido", () => {
	const cpf = "111.111.111-11";
	expect(() => new Order(cpf)).toThrowError("CPF inválido");
});

test("Deve criar um pedido vazio com 3 itens", () => {
	const cpf = "839.435.452-10";
	const order = new Order(cpf);

	order.addItem(new Item(1, "Música", "CD", 30), 3);
	order.addItem(new Item(2, "Vídeo", "DVD", 50), 1);
	order.addItem(new Item(3, "Vídeo", "VHS", 10), 2);

	const total = order.getTotal();
	expect(total).toBe(160);
});

test("Deve criar um pedido vazio com 3 itens com um cupom de desconto", () => {
	const cpf = "839.435.452-10";
	const order = new Order(cpf);

	order.addItem(new Item(1, "Música", "CD", 30), 3);
	order.addItem(new Item(2, "Vídeo", "DVD", 50), 1);
	order.addItem(new Item(3, "Vídeo", "VHS", 10), 2);

	order.addCoupon(new Coupon("VALE20", 20));

	const total = order.getTotal();
	expect(total).toBe(128);
});
