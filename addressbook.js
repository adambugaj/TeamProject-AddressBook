// button required to use
function createContact(firstName, lastName, phoneNumber, email) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.contactList = function() {
        return this.firstName;
    }
}

var sampleContact = {
  firstName: "Bill",
  lastName: "Door",
  phoneNumber: "01 294 323 434",
  email: "billdoor@microsoft.com",
  contactList
}

var contactList = [sampleContact];


//onload sample contact
function showSampleContact() {
  document.getElementById('contactTitle').innerHTML = sampleContact.contactList;    
  document.getElementById('firstName').innerHTML = sampleContact.firstName;
  document.getElementById('lastName').innerHTML = sampleContact.lastName;
  document.getElementById('phoneNumber').innerHTML = sampleContact.phoneNumber;
  document.getElementById('email').innerHTML = sampleContact.email;
}

contactList[contactList.length] = new createContact("John","Towel","40321241","johntowel@mail.com");
