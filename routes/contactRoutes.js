const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route for getting all contacts with search functionality
router.get('/', contactController.getAllContacts);

// Route for getting a single contact by ID
router.get('/:id', contactController.getContactById);

// Route for creating a new contact
router.post('/', contactController.createContact);

// Route for updating a contact
router.patch('/:id', contactController.updateContact);

// Route for deleting a contact
router.delete('/:id', contactController.deleteContact);

module.exports = router;
