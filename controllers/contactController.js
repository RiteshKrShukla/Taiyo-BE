const Contact = require('../models/contactModel');

// Controller logic for getting all contacts with search functionality
exports.getAllContacts = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query = {
        $or: [
          { firstName: { $regex: search, $options: 'i' } },
          { lastName: { $regex: search, $options: 'i' } },
        ],
      };
    }

    const contacts = await Contact.find(query);
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller logic for getting a single contact by ID
exports.getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller logic for creating a new contact
exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, status } = req.body;
    const newContact = new Contact({ firstName, lastName, status });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller logic for updating a contact
exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, status } = req.body;

    const contact = await Contact.findByIdAndUpdate(id, { firstName, lastName, status }, { new: true });

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller logic for deleting a contact
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
