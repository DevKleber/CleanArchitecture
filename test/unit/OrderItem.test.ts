import { OrderItem } from "../../src/domain/entity/OrderItem";

test("Deve criar um item do pedido", () => {
	const orderItem = new OrderItem(1, 1000, 10);
	const total = orderItem.getTotal();
	expect(total).toBe(10000);
});
