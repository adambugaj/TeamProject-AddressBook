function createContact(firstName, lastName, phoneNumber, email) { 
    return{
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        getFullName: function(){
            return firstName + " " + this.lastName;
        }
    }
}

var sampleContact = {
  firstName: "Bill",
  lastName: "Door",
  phoneNumber: "01 294 323 434",
  email: "billdoor@microsoft.com",
}

var contactList = [createContact(
    sampleContact.firstName, 
    sampleContact.lastName,
    sampleContact.phoneNumber, 
    sampleContact.email
)];

//onload sample contact
function showContact(contactObj) {
  document.getElementById('contactTitle').innerHTML = contactObj.getFullName();
  document.getElementById('firstName').innerHTML = contactObj.firstName;
  document.getElementById('lastName').innerHTML = contactObj.lastName;
  document.getElementById('phoneNumber').innerHTML = contactObj.phoneNumber;
  document.getElementById('email').innerHTML = contactObj.email;
}

//click a button to create a new contact and show it in the list
document.getElementById("createNewContact").addEventListener('click', function(e){
    var inputFirstName = document.getElementById("inputFirstName").value;
    var inputLastName = document.getElementById("inputLastName").value;
    var inputPhoneNumber = document.getElementById("inputPhoneNumber").value;
    var inputEmail = document.getElementById("inputEmail").value;

    var newContact = new createContact(inputFirstName, inputLastName, inputPhoneNumber, inputEmail);
    
    e.preventDefault();
});

