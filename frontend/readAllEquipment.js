// Read all equipment
app.get('/equipment', (req, res) => {
  // Retrieve all equipment data from the database 
  // Assuming we have a function getAllEquipment to handle this 
  getAllEquipment((err, equipmentList) => {
    if (err) {
      // Send a 500 error status code with error message if retrieval fails
      return res.status(500).json({ error: 'Failed to retrieve equipment' });
    }
    // Send the list of all equipment as a JSON response
    res.json(equipmentList);
  });
});
