// deleteEquipment.js

const Equipment = require('../models/equipmentModel');

// Function to delete equipment by ID
function deleteEquipment(id, callback) {
    // Validate the ID
    if (!id) {
        return callback(new Error('ID is required'));
    }
    // Find equipment by ID and delete it
    Equipment.findByIdAndDelete(id, (err) => {
        if (err) return callback(err); // Return error if deletion fails
        callback(null); // Return null if deletion is successful
    });
}

module.exports = deleteEquipment; // Export the function for use in other files
