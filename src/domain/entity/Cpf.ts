const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;

export class Cpf {
	constructor(value: string) {
		if (!this.validate(value)) {
			throw new Error("CPF inválido");
		}
	}

	validate(rawCpf: string) {
		if (!rawCpf) {
			return false;
		}

		const cpf = this.removeMask(rawCpf);

		if (!this.sizeOfCPFHas11Digits(cpf)) {
			return false;
		}

		if (this.allNumbersAreEqual(cpf)) {
			return false;
		}

		const digit1 = this.calculateDigit(cpf, FACTOR_DIGIT_1);
		const digit2 = this.calculateDigit(cpf, FACTOR_DIGIT_2);

		const actualDigit = cpf.slice(9);
		const calculatedDigit = `${digit1}${digit2}`;

		return actualDigit === calculatedDigit;
	}

	removeMask(cpf: string) {
		return cpf.replace(/\D/g, "");
	}
	sizeOfCPFHas11Digits = (cpf: string) => {
		return cpf.length === 11;
	};

	allNumbersAreEqual(cpf: string) {
		const [firstDigit] = cpf;
		return [...cpf].every((digit) => digit === firstDigit);
	}

	calculateDigit(cpf: string, factor: number) {
		let total = 0;
		for (const digit of cpf) {
			if (factor > 1) {
				total += parseInt(digit) * factor--;
			}
		}
		const rest = total % 11;
		return rest < 2 ? 0 : 11 - rest;
	}
}
