import React, { useEffect, useState } from 'react';

// Define an interface for the equipment data
interface Equipment {
    id: number;
    name: string;
    category: string;
    stockLevel: number;
    reorderPoint: number;
}

function EquipmentList() {
    // Initialize state for equipment list with an empty array
    const [equipment, setEquipment] = useState<Equipment[]>([]);

    // Fetch equipment data from the backend when the component mounts
    useEffect(() => {
        fetch('http://localhost:3001/equipment')
            .then((response) => response.json())
            .then((data) => setEquipment(data));
    }, []);

    return (
        <ul>
            {/* Iterate over equipment list and display each item */}
            {equipment.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.category} - Stock: {item.stockLevel} - Reorder Point: {item.reorderPoint}
                    {/* Additional UI for updating stock and reorder points */}
                </li>
            ))}
        </ul>
    );
}

export default EquipmentList;