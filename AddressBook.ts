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

    add(){
        const firstname = readLineSync.question("Enter First Name");
        const lastname = readLineSync.question("Enter Last Name");
        const address = readLineSync.question("Enter Address");
        const city = readLineSync.question("Enter City");
        const state = readLineSync.question("Enter State");
        const zip = parseInt(readLineSync.question("Enter Zip Code"));
        const phonenumber = parseInt(readLineSync.question("Enter Phone Number"));
        const email = readLineSync.question("Enter Email Address");

        const user : Contact = {
            firstname : firstname,
            lastname : lastname,
            address : address,
            city : city,
            state : state,
            zip : zip,
            phonenumber : phonenumber,
            email : email
        } 
        this.arr.push(user);
        console.log(this.arr);
    }
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
                address_book.add();
                break;
        
            default:
                break;
        }
    }
    
}

addressBook();