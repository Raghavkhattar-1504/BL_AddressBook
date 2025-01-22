import readLineSync  from "readline-sync";

interface Contact {
    firstname : string,
    lastname : string,
    address : string,
    city : string,
    state : string,
    zip : number,
    phonenumber : number,
    email : string
}

class AddressBook {
    arr : Contact[] = [];

    
}

function addressBook() {
    const address_book = new AddressBook();  

    const intro : string = ` Welcome to the Address Book
    Enter the corresponding number to perform the operations:
    0 -> Add Contacts
    1 -> Delete Contact
    2 -> Edit Contact
    3 -> Get All Contacts
    4 -> Exit `

    while (true) {
        console.log(intro);

        const input : number = parseInt(readLineSync.question("Enter a number"));
        switch (input) {
            case 0:
                break;
        
            default:
                break;
        }
    }
    
}

addressBook();