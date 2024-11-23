// src/services/contacts.js
import Contact from '../models/contact.js';

export const getAllContacts = async () => {
  return await Contact.find({});
};

export const getContactById = async (id) => {
  return await Contact.findById(id);
};
