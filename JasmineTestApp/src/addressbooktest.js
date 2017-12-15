// Turn off the list of a new contact
document.querySelector("#contactList").style.display = "none";
document.querySelector("#contactSubmit").style.display = "none";

class CreateContact {
    constructor(firstName, lastName, phoneNumber, email, addNumberPhone, addNewEmail) {
        //assign unique ID to the contact
        uniqueID++;
        this.id = uniqueID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = [phoneNumber];
        this.addNumberPhone = [addNumberPhone];
        this.email = email;
        this.addNewEmail = [addNewEmail];
    }
        getFullName() {
            return this.firstName + " " + this.lastName;
        }
}

var contactList = []
let uniqueID = 0;
var newContact = new CreateContact('Adam', 'Bugaj', '504334300', 'adambugaj@gmail.com');
var newContact1 = new CreateContact('Peter', 'Bugaj', '504334300', 'adambugaj@gmail.com');
newContact.getFullName()
contactList.push(newContact);

var getFirstLast = contactList[0].getFullName();
var getFirstLast1 = contactList[0].firstName + contactList[0].lastName;



console.log(newContact);
