// Update Equipment
app.put('/equipment/id', (req, res) => {
  // Extract the equipment ID from the request parameters
  const { id } = req.params;
  // Extract the updated equipment data from the request body
  const updatedEquipment = req.body;
  // Update the equipment data in the database with the specified ID
  // Assuming we have a function updateEquipment to handle this
  updateEquipment(id, updatedEquipment, (err, updatedEquipment) => {
    if (err) {
      // Send a 500 status code with error message if update fails
      return res.status(500).json({ error: 'Failed to update equipment' });
    }
    // Send the updated equipment data as a JSON response
    res.json(updatedEquipment);  
  });
});
       
       
       
       
       )
