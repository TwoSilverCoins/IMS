// equipmentRoutes.js

const express = require('express');
const createEquipment = require('../services/createEquipment');
const deleteEquipment = require('../services/deleteEquipment');
const updatedEquipment = require('../services/updateEquipment');
const router = express.Router();

// Route to create new equipment
router.post('/equipment', (req, res) => {
    // Call createEquipment function with request data
    createEquipment(req.body, (err, saveEquipment) => {
        if (err) return res.status(500).json({ error: 'Failed to create equipment' }); // Return error response if creation fails
        res.status(201).json(savedEquipment); // Return saved equipment if successful
    });
});

// Route to retrive all equipment
router.get('/equipment', (req, res) => {
    // Call readAllEquipment function
    readAllEquipment((err, equipmentList) => {
        if (err) return res.status(500).json({ error: 'Failed to retrieve equipment' }); // Return error response if retrieval fails
        res.json(equipmentList); // Return list of all equipment if successful
    });
});

// Route to update equipment by ID
router.put('/equipment/:id', (req, res) => {
    // Call updateEquipment function with equipment ID and request data
    updatedEquipment(req.params.id, req.body, (err, updatedEquipment) => {
        if (err) return res.status(500).json({ error: 'Failed to update equipment' }); // Return error response if update fails
        res.json(updatedEquipment); // Return updated equipment if successfl
    });
});

// Route to delete equipment by ID
router.delete('/equipment/:id', (req, res) => {
    // Call deleteEquipment function with equipment ID
    deleteEquipment(req.params.id, (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete equipment' }); // Return error response if deletion fails
        res.json(deleteEquipment); // Return no content status if successful
    });
});

module.exports = router; // Export router for use in other files