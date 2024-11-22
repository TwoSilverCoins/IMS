// updateEquipment.js

const Equipment = require('../models/equipmentModel');

// Function to update equipment by ID
function updateEquipment(id, data, callback) {
    // Find equipment by ID and update it with new data
    Equipment.findByIdAndUpdate(id, data, { new: true }, (err, updatedEquipment) => {
        if (err) return callback(err); // Return error if update fails
        callback(null, updatedEquipment); // Return updated equipment if successful
    });
}

module.exports = updateEquipment; // Export the function for use in other files
