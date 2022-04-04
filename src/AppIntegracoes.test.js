import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App';
import api from './api';

jest.mock('./api');

describe('Requisições para API', () => {
	it('Exibir lista de transações através da API', async () => {
		api.listaTransacoes.mockResolvedValue = [
			{
				valor: '10',
				transacao: 'saque',
				data: '10/08/2020',
				id: 1,
			},
			{
				transacao: 'deposito',
				valor: '20',
				data: '26/09/2020',
				id: 2,
			},
		];

		act(() => {
			render(<App />);
		});

		expect(await screen.findByText('Saque')).toBeInTheDocument();

		expect(screen.getByTestId('transacoes').children.length).toBe(2);
	});
});
