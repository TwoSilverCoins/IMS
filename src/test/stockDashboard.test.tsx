import React from 'react';
import { render } from '@testing-library/react';
import StockDashboard from '../components/stockDashboard';

test('displays stock dashboard', async () => {
    const { findByText } = render(<StockDashboard />);
    const element = await findByText(/Stock Dashboard/i);

    // Add assertions to verify the behavior
    expect(element).toBeInTheDocument();
});