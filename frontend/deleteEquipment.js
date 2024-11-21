// Delete equipment
app.delete('/equipment/:id', (req, res) => {
  // Extract the equipment ID from the request parameters
  const { id } = req.params;
  // Delete the equipment from the database with the specified ID
  // Assuming we have a function deleteEquipment to handle this
  deleteEquipment(id, (err) => {
    if (err) {
      // Send a 500 status code with error message if deletion fails
      return res.status(500).json({ error: 'Failed to delete equipment' });
      )
    // Send a 204 status code to indicate successful deletion with no content
    });
});
