import readLineSync from "readline-sync";

interface Contact {
    firstname: string,
    lastname: string,
    address: string,
    city: string,
    state: string,
    zip: number,
    phonenumber: number,
    email: string
}

class AddressBook {
    arr: Contact[] = [];

    add() {
        const firstname = readLineSync.question("Enter First Name");
        const lastname = readLineSync.question("Enter Last Name");
        const address = readLineSync.question("Enter Address");
        const city = readLineSync.question("Enter City");
        const state = readLineSync.question("Enter State");
        const zip = parseInt(readLineSync.question("Enter Zip Code"));
        const phonenumber = parseInt(readLineSync.question("Enter Phone Number"));
        const email = readLineSync.question("Enter Email Address");

        const user: Contact = {
            firstname: firstname,
            lastname: lastname,
            address: address,
            city: city,
            state: state,
            zip: zip,
            phonenumber: phonenumber,
            email: email
        }
        this.arr.push(user);
        console.log(this.arr);
    }


    edit(str: string) {
        const fobj = this.arr.filter(user => user.firstname === str);
        if (fobj.length !== 0) {
            console.log("Enter the details you want to edit or leave blank");
            const firstname: string = readLineSync.question("Edit firstname: ");
            const lastname: string = readLineSync.question("Edit lastname: ");
            const address: string = readLineSync.question("Edit address: ");
            const city: string = readLineSync.question("Edit city: ");
            const state: string = readLineSync.question("Edit state: ");
            const zip: number = parseInt(readLineSync.question("Edit ZIP code: "))
            const phoneNumber: number = parseInt(readLineSync.question("Edit phone number: "))
            const email: string = readLineSync.question("Edit email-address: ");

            if (firstname) fobj[0].firstname = firstname;
            if (lastname) fobj[0].lastname = lastname;
            if (address) fobj[0].address = address;
            if (city) fobj[0].city = city;
            if (state) fobj[0].state = state;
            if (zip) fobj[0].zip = zip;
            if (phoneNumber) fobj[0].phonenumber = phoneNumber;
            if (email) fobj[0].email = email;
            console.log("Contact edited successfully!")
        }
        else {
            console.log("Contact not found!!")
        }
    }


}


function addressBook() {
    const address_book = new AddressBook();

    const intro: string = ` Welcome to the Address Book
    Enter the corresponding number to perform the operations:
    0 -> Add Contacts
    1 -> Edit Contact
    2 -> Delete Contact
    3 -> Get All Contacts
    4 -> Exit `

    while (true) {
        console.log(intro);

        const input: number = parseInt(readLineSync.question("Enter a number"));
        switch (input) {
            case 0:
                address_book.add();
                break;

            case 1:
                const editname : string = readLineSync.question("Find contact by entering name");
                address_book.edit(editname);
                break;

            case 2:

            default:
                break;
        }
    }

}

addressBook();