// createEquipment.js

const Equipment = require('../models/equipmentModel');

// Function to create new equipment
function createEquipment(data, callback) {
    if (!data.name || !data.category) {
        return callback(new Error('Name and category are required'));
    }
    
    // Create a new equipment instance with the provided data
    const newEquipment = new Equipment(data);

    // Save the new equipment to the database
    newEquipment.save((err, savedEquipment) => {
        if (err) return callback(err); // Return error if saving fails
        callback(null, savedEquipment); // Return saved equipment if successful
    });
}

module.exports = createEquipment; // Export the function for use in other files
