// editEquipment.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

// Define an interface for the form data 
interface FormData {
    name: string;
    category: string;
}

function editEquipment() {
    // Extract the equipment ID from the URL parameters
    const { id } = useParams<Record<string, string | undefined>>();
    // Initialize state for form data with empty values
    const [formData, setFormData] = useState<FormData>({ name: '', category: ''});

// Fetch the existing equipment data from the backend when the component mounts
useEffect(() => {
    fetch(`/equipment/${id}`)
    .then((response) => response.json())
    .then((data) => setFormData(data));
}, [id]);

// Handle form submission
const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Send a PUT request to the backend to update the equipment
    await fetch(`/equipment/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Convert form data to JSON
    });
};

// Handle input change
const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
        <button type='submit'>Update Equipment</button>
        </form>
    );
}

export default editEquipment;