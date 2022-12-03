import { Cpf } from "../src/domain/entity/Cpf";

test("CPF deve ser valido", () => {
	const cpfValid = "704.557.190-98";
	const isValid = new Cpf(cpfValid);
	expect(isValid).toBeTruthy();
});

test("Deve ser VAZIO", () => {
	expect(() => new Cpf("")).toThrowError("CPF inválido");
});

test("CPF deve ser inválido", () => {
	const cpfValid = "123.456.789-00";
	expect(() => new Cpf(cpfValid)).toThrowError("CPF inválido");
});

test("Validar CPF - Todos os números são iguais", () => {
	const cpfValid = "11111111111";
	expect(() => new Cpf(cpfValid)).toThrowError("CPF inválido");
});

test("Deve dar erro se o CPF tiver menos ou mais do que 11 caracteres", () => {
	const cpfValid = "123.456.7812-00";
	expect(() => new Cpf(cpfValid)).toThrowError("CPF inválido");
});

test("Validar função - Deve dar erro se o CPF tiver menos ou mais do que 11 caracteres", () => {
	const cpfValid = "123.456.78-00";
	expect(() => new Cpf(cpfValid)).toThrowError("CPF inválido");
});
