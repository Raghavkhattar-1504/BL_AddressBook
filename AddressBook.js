"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
class AddressBook {
    constructor() {
        this.arr = [];
    }
    add() {
        const firstname = readline_sync_1.default.question("Enter First Name");
        const lastname = readline_sync_1.default.question("Enter Last Name");
        const address = readline_sync_1.default.question("Enter Address");
        const city = readline_sync_1.default.question("Enter City");
        const state = readline_sync_1.default.question("Enter State");
        const zip = parseInt(readline_sync_1.default.question("Enter Zip Code"));
        const phonenumber = parseInt(readline_sync_1.default.question("Enter Phone Number"));
        const email = readline_sync_1.default.question("Enter Email Address");
        const user = {
            firstname: firstname,
            lastname: lastname,
            address: address,
            city: city,
            state: state,
            zip: zip,
            phonenumber: phonenumber,
            email: email
        };
        this.arr.push(user);
        console.log(this.arr);
    }
    edit(str) {
        const fobj = this.arr.filter(user => user.firstname === str);
        if (fobj.length !== 0) {
            console.log("Enter the details you want to edit or leave blank");
            const firstname = readline_sync_1.default.question("Edit firstname: ");
            const lastname = readline_sync_1.default.question("Edit lastname: ");
            const address = readline_sync_1.default.question("Edit address: ");
            const city = readline_sync_1.default.question("Edit city: ");
            const state = readline_sync_1.default.question("Edit state: ");
            const zip = parseInt(readline_sync_1.default.question("Edit ZIP code: "));
            const phoneNumber = parseInt(readline_sync_1.default.question("Edit phone number: "));
            const email = readline_sync_1.default.question("Edit email-address: ");
            if (firstname)
                fobj[0].firstname = firstname;
            if (lastname)
                fobj[0].lastname = lastname;
            if (address)
                fobj[0].address = address;
            if (city)
                fobj[0].city = city;
            if (state)
                fobj[0].state = state;
            if (zip)
                fobj[0].zip = zip;
            if (phoneNumber)
                fobj[0].phonenumber = phoneNumber;
            if (email)
                fobj[0].email = email;
            console.log("Contact edited successfully!");
        }
        else {
            console.log("Contact not found!!");
        }
    }
}
function addressBook() {
    const address_book = new AddressBook();
    const intro = ` Welcome to the Address Book
    Enter the corresponding number to perform the operations:
    0 -> Add Contacts
    1 -> Edit Contact
    2 -> Delete Contact
    3 -> Get All Contacts
    4 -> Exit `;
    while (true) {
        console.log(intro);
        const input = parseInt(readline_sync_1.default.question("Enter a number"));
        switch (input) {
            case 0:
                address_book.add();
                break;
            case 1:
                const editname = readline_sync_1.default.question("Find contact by entering name");
                address_book.edit(editname);
                break;
            case 2:
            default:
                break;
        }
    }
}
addressBook();
