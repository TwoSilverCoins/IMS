// updateStockLevel.js

const Equipment = require('../models/equipmentModel');

// Function to update stock level
function updateStockLevel(id, stockLevel, callback) {
    Equipment.findByIdAndUpdate(id, { stockLevel: stockLevel }, { new: true }, (err, updatedEquipment) => {
        if (err) return callback(err); // Return error if update fails
        callback(null, updatedEquipment); // Return updated equipment if successful
    });
}

module.exports = updateStockLevel; // Export the function for use in other files
