// Turn off the list of a new contact
document.querySelector("#contactList").style.display = "none";
document.querySelector("#contactSubmit").style.display = "none";

class CreateContact {
    constructor(firstName, lastName, phoneNumber, email) {
        //assign unique ID to the contact
        uniqueID++;
        this.id = uniqueID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = [phoneNumber];
        this.email = [email];
    }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
}
// Array for contacts to store them
const contactList = []
// Must be rechanged from global scope
let uniqueID = 0;

// Show sample contact
function showContact(contactObj) {
    document.querySelector('#contactTitle').innerHTML = contactObj.getFullName();
    document.querySelector('#firstName').innerHTML = contactObj.firstName;
    document.querySelector('#lastName').innerHTML = contactObj.lastName;
    document.querySelector('#phoneNumber').innerHTML = contactObj.phoneNumber;
    document.querySelector('#email').innerHTML = contactObj.email;
}

// Click Contacts button to show sample contactObj
document.querySelector('#showContactList').addEventListener('click', sampleContact);
// Function for contacts button to create sample contact
function sampleContact() {
    // Creating sample contact
    let newSampleContact = new CreateContact('Bill', 'Gates', '523292 32932', 'billgates@microsoft.com');
    // Storing into Array a sample contact
    contactList.push(newSampleContact);
    // Show it by using function made for sample contact
    showList(newSampleContact);
    // Display block of a contact
    document.querySelector("#contactList").style.display = "block";
}



//show the list of contacts
function showList(contactObj) {
    document.querySelector('#contactList').innerHTML += `<hr><li class="list-group-item"; id="contactInList"><h4 id="contactTitle1">${contactObj.id}. ${contactObj.getFullName()}</h4>`;

    document.getElementById('contactList').innerHTML += `<li class="list-group-item">First Name:<h5><span class="badge badge-secondary" id="firstName1">${contactObj.firstName}</span><button type="button" class="btn btn-defualt" id="editButton" onclick="editFirstName('contactObj.firstName');"><i class="glyphicon glyphicon-edit"></i></button></h5></li>`;

    document.getElementById('contactList').innerHTML += '<li class="list-group-item">Last Name:'+'<h5><span class="badge badge-secondary" id="lastName1">'+contactObj.lastName+'</span><button type="button" class="btn btn-defualt" id="editButton" onclick="editLastName('+'\''+contactObj.lastName+'\''+');"><i class="glyphicon glyphicon-edit"></i></button></h5></li>';

    document.getElementById('contactList').innerHTML += `<li class="list-group-item">Phone Number:<h5><button onclick="addPhone()" id="addPhone" type="button" class="btn btn-default btn-circle"><i class="glyphicon glyphicon-plus"></i></button><span class="badge badge-secondary" id="phoneNumber1">${contactObj.phoneNumber}</span>${contactObj.addNumberPhone}</h5></li>`;

    document.getElementById('contactList').innerHTML += `<li class="list-group-item">Email:<h5><button onclick="addEmail()" id="addEmail" type="button" class="btn btn-default btn-circle"><i class="glyphicon glyphicon-plus"></i></button><span class="badge badge-secondary" id="email">${contactObj.email}</span>${contactObj.addNewEmail}</h5></li>`;

    //a button to duplicate the contact
    document.getElementById('contactList').innerHTML += `<button type="button" id="${contactObj.id}" class="btn btn-default btn-sm duplicateContact">Duplicate</button>`;

    document.getElementById('contactList').innerHTML += `<button onclick="deleteButton(\'${contactObj.id}\')" type="button" class="btn btn-danger btn-sm" id="deleteButton">Delete</button></li>`;
}
