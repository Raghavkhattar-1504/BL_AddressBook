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
}
function addressBook() {
    const address_book = new AddressBook();
    const intro = ` Welcome to the Address Book
    Enter the corresponding number to perform the operations:
    0 -> Add Contacts
    1 -> Delete Contact
    2 -> Edit Contact
    3 -> Get All Contacts
    4 -> Exit `;
    while (true) {
        console.log(intro);
        const input = parseInt(readline_sync_1.default.question("Enter a number"));
        switch (input) {
            case 0:
                break;
            default:
                break;
        }
    }
}
addressBook();
