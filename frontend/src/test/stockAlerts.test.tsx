import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import StockAlerts from '../components/stockAlerts';

test('displays stock alerts', async () => {
    const { findByText } = render(<StockAlerts />);
    const element = await findByText(/Stock Alerts/i);

    //Add assertions to verify the behavior
    expect(element).toBeInTheDocument();
});