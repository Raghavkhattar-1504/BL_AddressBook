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

interface newBook {
    name: string,
    data: AddressBook;
}

class AddressBook {
    arr: Contact[] = [];

    add() {
        const firstname = readLineSync.question("Enter First Name");
        const lastname = readLineSync.question("Enter Last Name")

        const address = readLineSync.question("Enter Address");
        const city = readLineSync.question("Enter City");
        const state = readLineSync.question("Enter State");
        const zip = parseInt(readLineSync.question("Enter Zip Code"));
        const phonenumber = parseInt(readLineSync.question("Enter Phone Number"));
        const email = readLineSync.question("Enter Email Address");

        const user: Contact = {
            firstname: firstname.toLowerCase(),
            lastname: lastname.toLowerCase(),
            address: address,
            city: city.toLowerCase(),
            state: state.toLowerCase(),
            zip: zip,
            phonenumber: phonenumber,
            email: email.toLowerCase()
        }

        const userchk = this.arr.filter(item => item.firstname === user.firstname && item.lastname === user.lastname);
        if (userchk[0]) {
            console.log("Conatct already exists with this name. ");
            return;
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

    delete(name: string) {
        this.arr = this.arr.filter(item => item.firstname !== name);
        console.log("Contact deleted successfully");
    }

    getAllContacts() {
        return this.arr;
    }
}

class Manager {
    main: newBook[];
    constructor() {
        this.main = [];
    }


    add(name: string) {
        const chk = this.main.filter(item => item.name === name);
        if (!chk[0]) {
            this.main.push({ name: name, data: new AddressBook() });
            return;
        }
        else {
            console.log("This name already exists, try using unique name.");
        }
    }

    getBook(name: string): any {
        const book: any = this.main.filter(item => item.name === name);
        if (!book) {
            console.log("Address Book is not defined.");
        }
        else {
            return book[0];
        }
    }

    getPersonByCity(name: string, place: string) {
        const data = this.main.flatMap(item => item.data.getAllContacts());
        const filteredData = data.filter(item => item.firstname === name && (item.city === place || item.state === place));
        return filteredData;
    }

    PersonByCityCount(place : string){
        const data = this.main.flatMap(item => item.data.getAllContacts());
        const filteredData = data.filter(item => item.city === place || item.state === place);
        return filteredData.length;
    }


}

function addressBook(address_book: AddressBook) {
    const intro: string =
        `Enter the corresponding number to perform the operations:
    0 -> Add Contacts 
    1 -> Edit Contact 
    2 -> Delete Contact 
    3 -> Add Multiple Contacts 
    4 -> Get all Contacts 
    5 -> Exit Menu `

    while (true) {
        console.log(intro);

        const input: number = parseInt(readLineSync.question("Enter a number"));
        switch (input) {
            case 0:
                address_book.add();
                break;

            case 1:
                const editname: string = readLineSync.question("Find contact by entering name");
                address_book.edit(editname);
                break;

            case 2:
                const deletename: string = readLineSync.question("Delete the contact by entering name");
                address_book.delete(deletename);
                break;

            case 3:
                let noOfContacts: number = parseInt(readLineSync.question("Enter number of contacts you want to add: "))
                while (noOfContacts) {
                    address_book.add();
                    noOfContacts--;
                }
                break;
            case 4:
                console.log(address_book.getAllContacts());
                break;
            case 5:
                console.log("Exiting...");
                return;

            default:
                break;
        }
    }

}

function ManagerBook() {
    const managerBook = new Manager()



    while (true) {
        const boilerplate: string = `----WELCOME TO THE ADDRESS BOOK MANAGER----
        Choose the number:
        0 -> Exit 
        1 -> Add Address Book 
        2 -> Select a book 
        3 -> Get Person by City 
        4 -> Get count of Persons by city or state `

        console.log(boilerplate);
        const inp: number = parseInt(readLineSync.question("Enter the number: "));
        switch (inp) {
            case 0:
                console.log("Exiting...");
                return;
            case 1:
                const mainName: string = readLineSync.question("Enter the book name: ");
                managerBook.add(mainName);
                break;
            case 2:
                const bookname: string = readLineSync.question("Enter the book name: ");
                const selectedBook: any = managerBook.getBook(bookname);
                addressBook(selectedBook.data);
                break;
            case 3:
                const personName: string = readLineSync.question("Enter the person name: ");
                const placeName: string = readLineSync.question("Enter the city or state: ");
                console.log(managerBook.getPersonByCity(personName.toLowerCase(), placeName.toLowerCase()));
                break;
            case 4:
                const place: string = readLineSync.question("Enter the city or state name: ");
                console.log(managerBook.PersonByCityCount(place.toLowerCase()));
                break;
                
            default:
                break;


        }
    }

}

ManagerBook();
