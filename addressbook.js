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
  document.getElementById('contactList').innerHTML += '<hr><h4 id="contactTitle">'+contactObj.getFullName()+'</h4>'  
    
  document.getElementById('contactList').innerHTML += '<li class="list-group-item">First Name:'+'<h5><span class="badge badge-secondary" id="firstName">'+contactObj.firstName+'</span></h5></li>';
    
//  document.getElementById('contactList').innerHTML = '<li class="list-group-item">Last Name:'+'<h5><span class="badge badge-secondary" id="lastName">'+contactObj.lastName+'</span></h5></li>';
    
    
    
    
    
    
  document.getElementById('phoneNumber').innerHTML = contactObj.phoneNumber;
  document.getElementById('email').innerHTML = contactObj.email;
}

//click a button to create a new contact and show it in the list
document.getElementById("createNewContact").addEventListener('click', function(e){
    var inputFirstName = document.getElementById("inputFirstName").value;
    var inputLastName = document.getElementById("inputLastName").value;
    var inputPhoneNumber = document.getElementById("inputPhoneNumber").value;
    var inputEmail = document.getElementById("inputEmail").value;

//create a contact
    var newContact = new createContact(inputFirstName, inputLastName, inputPhoneNumber, inputEmail);
    
//save the contact    
    contactList.push(newContact);
    
    e.preventDefault();
});

//click to show the list of saved contacts
document.getElementById('showContactList').addEventListener('click', function(){
    contactList.forEach(function(index){
    showContact(index);
        
    });
    
});

















