// readAllEquipment.js

const Equipment = require('../models/equipmentModel');

// Function to retrieve all equipment
function readAllEquipment(callback) {
    // Find all equipment documents in the database
    Equipment.find({}, (err, equipmentList) => {
        if (err) return callback(err); // Return error if retrieval fails
        callback(null, equipmentList); // Return list of all equipment if successful
    });
}

module.exports = readAllEquipment; // Export the function for use in other files
