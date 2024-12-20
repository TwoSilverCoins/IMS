import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateEquipment from '../components/createEquipment';
import '@testing-library/jest-dom/extend-expect';

test('creates new equipment', async () => {
    const { getByPlaceholderText, getByText } = render(<CreateEquipment />)
    const nameInput = getByPlaceholderText('Name') as HTMLInputElement;
    const categoryInput = getByPlaceholderText('Category') as HTMLInputElement;
    const submitButton = getByText('Add Equipment');

    fireEvent.change(nameInput, { target: { value: 'Test Equipment' } });
    fireEvent.change(categoryInput, { target: { value: 'Test Category'} });
    fireEvent.click(submitButton);

    // Add assertions to verify the behavior
    expect(nameInput.value).toBe('Test Equipment');
    expect(categoryInput.value).toBe('Test Category');
});