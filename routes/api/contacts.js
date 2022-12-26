const express = require('express');
const contactsOperation = require('../../models/contacts');
const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(2).max(10).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(5).max(20).required(),
})



const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const contacts = await contactsOperation.listContacts();
    res.json({ data: contacts })
  } catch (error) {
    next(error);
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId} = req.params;
    const contacts = await contactsOperation.getContactById(contactId);
    if (!contacts) {
     return res.status(404).json({ message: 'Not found' });
    }
    res.json({ data: contacts })
  } catch (error) {
      next(error);
  }

})

router.post('/', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: `${error.message}` });
    }
    const contacts = await contactsOperation.addContact(req.body);
    res.status(201).json({data: contacts})
  } catch (error) {
    next(error);
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contacts = await contactsOperation.removeContact(contactId);
    if (!contacts) {
        return res.status(404).json({ message: 'Not found' });
    }
    res.json({message: "contact deleted"})
  } catch (error) {
      next(error);
  }
})

router.put('/:contactId', async (req, res, next) => {
   try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: `${error.message}` });
     }
      const { contactId } = req.params;
      const contacts = await contactsOperation.updateContact(contactId, req.body);
      if (!contacts) {
        return res.status(404).json({ message: 'Not found' });
      }
      res.json({data: contacts})
  } catch (error) {
      next(error);
  }
})

module.exports = router
