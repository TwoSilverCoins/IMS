// createEquipment.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define an interface for the form data
interface FormData {
    name: string;
    category: string;
}

function createEquipment() {
    // Initialize state for form data with empty values
    const [formData, setFormData] = useState<FormData>({ name: '', category: ''});

    // Handle form submission
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Send a POST request to the backend to create a new equipment
        await fetch('/equipment', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(formData), // Convert form data to JSON
        });
    };

    // Handle input change
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value} = event.target;
        setFormData({ ...formData, [name]: value })
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input field for equipment name */}
            <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            />
            {/* Input field for equipment category */}
            <input
            type='text'
            name='category'
            value={formData.category}
            onChange={handleChange}
            placeholder='Category'
            />
            {/* Submit button */}
            <button type='Submit'>Add Equipment</button>
        </form>
    );
}

export default createEquipment;