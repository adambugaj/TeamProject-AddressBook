
// button required to use
function addContact(firstName, lastName, phoneNumber, email) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.contactList = function() {
        return this.firstName + " " + this.lastName;
    }
}

var sampleContact = {
  firstName: "Bill",
  lastName: "Door",
  phoneNumber: "01 294 323 434",
  email: "billdoor@microsoft.com",
}

var contactList = [sampleContact];

//contactList[contactList.length] = new addContact("John","Towel","40321241","johntowel@mail.com");
var getFirstName = document.getElementById("putFirstName")

function tryThis() {
    
    var newContact = new addContact(getFirstName.value);
    contactList.push(newContact);
    
}

//onload sample contact
function showContact() {
  document.getElementById('contactTitle').innerHTML = contactList[1].contactList();    
  document.getElementById('firstName').innerHTML = contactList[1].firstName;
}

//check test
document.write('html')
