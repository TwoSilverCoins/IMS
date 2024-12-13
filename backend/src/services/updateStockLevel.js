// updateStockLevel.js

const Equipment = require('../models/equipmentModel');

// Function to update stock level
function updateStockLevel(id, stockLevel, callback) {
    // Validate incoming data
    if (!id) {
        return callback(new Error('ID is required'));
    }
    if (typeof stockLevel !== 'number' | stockLevel < 0) {
        return callback(new Error('Invalid stock level'));
    }
    
    // Find equipment by ID and update the stock level
    Equipment.findByIdAndUpdate(id, { stockLevel: stockLevel }, { new: true }, (err, updatedEquipment) => {
        if (err) return callback(err); // Return error if update fails
        callback(null, updatedEquipment); // Return updated equipment if successful
    });
}

module.exports = updateStockLevel; // Export the function for use in other files
