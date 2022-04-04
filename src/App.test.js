import React from 'react';
import { render, screen } from '@testing-library/react';

import App, { calcularNovoSaldo } from './App';

// describe: indica o teste, insere o nome do teste, o que é, renderiza o componente e o que é esperado do teste.
// describe serve principalmente para organizar em blocos os testes, de maneira que faça sentido para o componente ou aplicação.

describe('Componente principal', () => {
	describe('Quando eu abro o app do banco', () => {
		it('O nome é exibido', () => {
			render(<App />);

			expect(screen.getByText('ByteBank')).toBeInTheDocument();
		});

		it('Quando eu abro o app do banco, o saldo é exibido', () => {
			render(<App />);

			expect(screen.getByText('Saldo:')).toBeInTheDocument();
		});
		it('Quando eu abro o app do banco, o botão de realizar transação é exibido', () => {
			render(<App />);

			expect(screen.getByText('Realizar operação')).toBeInTheDocument();
		});
	});

	describe('Quando eu realizo uma transação', () => {
		it('que é um saque, o valor vai diminuir', () => {
			const valores = {
				transacao: 'saque',
				valor: 50,
			};
			const novoSaldo = calcularNovoSaldo(valores, 150);

			expect(novoSaldo).toBe(100);
		});

		it('que é um depósito, o valor vai aumentar', () => {
			const valores = {
				transacao: 'deposito',
				valor: 50,
			};
			const novoSaldo = calcularNovoSaldo(valores, 150);

			expect(novoSaldo).toBe(200);
		});
	});
});
