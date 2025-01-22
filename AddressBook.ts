import readLineSync  from "readline-sync";

interface Contact {
    firstname : string,
    lastname : string,
    address : string,
    city : string,
    state : string,
    zip : number,
    phonenumber : string,
    email : string
}

class AddressBook {
    arr : Contact[] = [];

    
}
