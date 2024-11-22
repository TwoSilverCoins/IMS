const express = require('express');
const createEquipment = require('../services/createEquipment');
const deleteEquipment = require('../services/deleteEquipment');
const readAllEquipment = require('../services/readAllEquipment');
const updateEquipment = require('../services/updateEquipment');
const updateStockLevel = require('../services/updateStockLevel');
const updateReorderPoint = require('../services/updateReorderPoint');
const router = express.Router();

// Route to create new equipment
router.post('/equipment', (req, res) => {
    // Call createEquipment function with request data
    createEquipment(req.body, (err, savedEquipment) => {
        if (err) return res.status(500).json({ error: 'Failed to create equipment' }); // Return error response if creation fails
        res.status(201).json(savedEquipment); // Return saved equipment if successful
    });
});

// Route to retrieve all equipment
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
    updateEquipment(req.params.id, req.body, (err, updatedEquipment) => {
        if (err) return res.status(500).json({ error: 'Failed to update equipment' }); // Return error response if update fails
        res.json(updatedEquipment); // Return updated equipment if successful
    });
});

// Route to delete equipment by ID
router.delete('/equipment/:id', (req, res) => {
    // Call deleteEquipment function with equipment ID
    deleteEquipment(req.params.id, (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete equipment' }); // Return error response if deletion fails
        res.sendStatus(204); // Return no content status if successful
    });
});

// Route to update stock level
router.put('/equipment/:id/stock', (req, res) => {
    // Call updateStockLevel function with equipment ID and stock level data
    updateStockLevel(req.params.id, req.body.stockLevel, (err, updatedEquipment) => {
        if (err) return res.status(500).json({ error: 'Failed to update stock level' }); // Return error response if update fails
        res.json(updatedEquipment); // Return updated equipment if successful
    });
});

// Route to update reorder point
router.put('/equipment/:id/reorder', (req, res) => {
    // Call updateReorderPoint function with equipment ID and reorder point data
    updateReorderPoint(req.params.id, req.body.reorderPoint, (err, updatedEquipment) => {
        if (err) return res.status(500).json({ error: 'Failed to update reorder point' }); // Return error response if update fails
        res.json(updatedEquipment); // Return updated equipment if successful
    });
});

module.exports = router; // Export router for use in other files
