const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get All Contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler( async(req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id});
    res.status(200).json(contacts);
});

//@desc Create Contacts
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
            name,
            email,
            phone,
            user_id: req.user.id
        });
    res.status(201).json(contact);
});

//@desc GET Contact by ID
//@route GET /api/contact/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found.");
    }
    res.status(201).json(contact);
});

//@desc Update Contact
//@route PUT /api/contact/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found.");
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other users contact");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );
    res.status(201).json(updatedContact);
});

//@desc DELETE Contact
//@route DELETE /api/contact/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        console.log("I am inside");
        res.status(404);
        throw new Error("Contact not found.");
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other users contact");
    }
    
    const stat = await Contact.findOneAndDelete({_id: req.params.id});
    res.status(201).json(contact);
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};