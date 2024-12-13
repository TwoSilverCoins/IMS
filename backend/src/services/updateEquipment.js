// updateEquipment.js

const Equipment = require('../models/equipmentModel');

// Function to update equipment by ID
function updateEquipment(id, data, callback) {
    // Validate incoming data
    if (!id) {
        return callback(new Error('ID is required'));
    }
    if (!data.name || !data.category) {
        return callback(new Error('Name and category are required'));
    }
    
    // Find equipment by ID and update it with new data
    Equipment.findByIdAndUpdate(id, data, { new: true }, (err, updatedEquipment) => {
        if (err) return callback(err); // Return error if update fails
        callback(null, updatedEquipment); // Return updated equipment if successful
    });
}

module.exports = updateEquipment; // Export the function for use in other files
