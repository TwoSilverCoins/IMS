const { application } = require("express");

// Create a new equipment
application.post('/equipment', (req, res) => {
    // Extract new equipment data from teh request body
    const newEquipment = req.body;
    // Save the new equipment data to the database
    // Assuming we have a function saveEquipment to handle this
    saveEquipment(newEquipment, (err, saveEquipment) => {
        if (err) {
            // Send a 500 status code with error message if saving fails
            return res.status(500).json({ error: 'Failed to create equipment' });
        }
        // Send a 201 status code with the saved equipment data if successful
    })
})
