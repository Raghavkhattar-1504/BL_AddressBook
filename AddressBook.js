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
            firstname: firstname.toLowerCase(),
            lastname: lastname.toLowerCase(),
            address: address,
            city: city.toLowerCase(),
            state: state.toLowerCase(),
            zip: zip,
            phonenumber: phonenumber,
            email: email.toLowerCase()
        };
        const userchk = this.arr.filter(item => item.firstname === user.firstname && item.lastname === user.lastname);
        if (userchk[0]) {
            console.log("Conatct already exists with this name. ");
            return;
        }
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
    delete(name) {
        this.arr = this.arr.filter(item => item.firstname !== name);
        console.log("Contact deleted successfully");
    }
    getAllContacts() {
        return this.arr;
    }
    sortContacts() {
        this.arr.sort((a, b) => a.firstname.localeCompare(b.firstname));
        console.log(this.arr);
    }
    sortContactsbyValue() {
        const menu = `Enter the nmber on which basis you want to sort: 
        1 -> Sort by city 
        2 -> Sort by state
        3 -> Sort by zip `;
        console.log(menu);
        const sortType = parseInt(readline_sync_1.default.question("Enter the number : "));
        if (sortType === 1) {
            this.arr.sort((a, b) => a.city.localeCompare(b.city));
            return this.arr;
        }
        else if (sortType === 2) {
            this.arr.sort((a, b) => a.state.localeCompare(b.state));
            return this.arr;
        }
        else {
            this.arr.sort((a, b) => a.zip - b.zip);
            return this.arr;
        }
    }
}
class Manager {
    constructor() {
        this.main = [];
    }
    add(name) {
        const chk = this.main.filter(item => item.name === name);
        if (!chk[0]) {
            this.main.push({ name: name, data: new AddressBook() });
            return;
        }
        else {
            console.log("This name already exists, try using unique name.");
        }
    }
    getBook(name) {
        const book = this.main.filter(item => item.name === name);
        if (!book) {
            console.log("Address Book is not defined.");
        }
        else {
            return book[0];
        }
    }
    getPersonByCity(name, place) {
        const data = this.main.flatMap(item => item.data.getAllContacts());
        const filteredData = data.filter(item => item.firstname === name && (item.city === place || item.state === place));
        return filteredData;
    }
    PersonByCityCount(place) {
        const data = this.main.flatMap(item => item.data.getAllContacts());
        const filteredData = data.filter(item => item.city === place || item.state === place);
        return filteredData.length;
    }
}
function addressBook(address_book) {
    const intro = `Enter the corresponding number to perform the operations:
    0 -> Add Contacts 
    1 -> Edit Contact 
    2 -> Delete Contact 
    3 -> Add Multiple Contacts 
    4 -> Get all Contacts 
    5 -> Sort contacts by name
    6 -> Sort Contacts by Parameter
    7 -> Exit  `;
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
                const deletename = readline_sync_1.default.question("Delete the contact by entering name");
                address_book.delete(deletename);
                break;
            case 3:
                let noOfContacts = parseInt(readline_sync_1.default.question("Enter number of contacts you want to add: "));
                while (noOfContacts) {
                    address_book.add();
                    noOfContacts--;
                }
                break;
            case 4:
                console.log(address_book.getAllContacts());
                break;
            case 5:
                address_book.sortContacts();
                break;
            case 6:
                console.log(address_book.sortContactsbyValue());
                break;
                break;
            case 7:
                console.log("Exiting...");
                return;
            default:
                break;
        }
    }
}
function ManagerBook() {
    const managerBook = new Manager();
    while (true) {
        const boilerplate = `----WELCOME TO THE ADDRESS BOOK MANAGER----
        Choose the number:
        0 -> Exit 
        1 -> Add Address Book 
        2 -> Select a book 
        3 -> Get Person by City 
        4 -> Get count of Persons by city or state `;
        console.log(boilerplate);
        const inp = parseInt(readline_sync_1.default.question("Enter the number: "));
        switch (inp) {
            case 0:
                console.log("Exiting...");
                return;
            case 1:
                const mainName = readline_sync_1.default.question("Enter the book name: ");
                managerBook.add(mainName);
                break;
            case 2:
                const bookname = readline_sync_1.default.question("Enter the book name: ");
                const selectedBook = managerBook.getBook(bookname);
                addressBook(selectedBook.data);
                break;
            case 3:
                const personName = readline_sync_1.default.question("Enter the person name: ");
                const placeName = readline_sync_1.default.question("Enter the city or state: ");
                console.log(managerBook.getPersonByCity(personName.toLowerCase(), placeName.toLowerCase()));
                break;
            case 4:
                const place = readline_sync_1.default.question("Enter the city or state name: ");
                console.log(managerBook.PersonByCityCount(place.toLowerCase()));
                break;
            default:
                break;
        }
    }
}
ManagerBook();
