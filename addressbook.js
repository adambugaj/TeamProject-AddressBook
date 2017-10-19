// button required to use
function createContact(firstName) {
  this.firstName = firstName;
  //, lastName, phoneNumber, email
  // this.lastName = lastName;
  // this.phoneNumber = phoneNumber;
  // this.email = email;
};

var sampleContact = {
  firstName: "Bill",
  lastName: "Door",
  phoneNumber: "01 294 323 434",
  email: "billdoor@microsoft.com"
}

//onload sample contact
function showSampleContact() {
  document.getElementById('firstName').innerHTML = sampleContact.firstName;
  document.getElementById('lastName').innerHTML = sampleContact.lastName;
  document.getElementById('phoneNumber').innerHTML = sampleContact.phoneNumber;
  document.getElementById('email').innerHTML = sampleContact.email;
}

document.write(sampleContact.firstName)
