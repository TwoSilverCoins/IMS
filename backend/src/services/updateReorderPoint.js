// updateReorderPoint.js

const Equipment = require('../models/equipmentModel');

// Function to update reorder point
function updateReorderPoint(id, reorderPoint, callback) {
    Equipment.findByIdAndUpdate(id, { reorderPoint: reorderPoint }, { new: true }, (err, updatedEquipment) => {
        if (err) return callback(err); // Return error if update fails
        callback(null, updatedEquipment); // Return updated equipment if successful
    });
}

module.exports = updateReorderPoint; // Export the function for use in other files
