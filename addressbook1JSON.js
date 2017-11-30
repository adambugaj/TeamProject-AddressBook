// click a button to create a new contact and show it in the list
document.getElementById("createNewContact").addEventListener('click', saveContact);
    
function saveContact(e) {
    var inputFirstName = document.getElementById("inputFirstName").value;
    var inputLastName = document.getElementById("inputLastName").value;
    var inputPhoneNumber = document.getElementById("inputPhoneNumber").value;
    var inputEmail = document.getElementById("inputEmail").value;
    var phoneNumberString = Number(inputPhoneNumber);
    
    // save the contact but first fill all blank spaces
    if (inputFirstName.value === "") {
        alert("Please type first name");
    } 
    else if (inputLastName === "") {
        alert("Please type last name");
    } 
    else if (inputPhoneNumber === "") {
        alert("Please type phone number");
    }
     // alert if user provided not a number
    else if (Number.isInteger(phoneNumberString) === false) {
        alert("Not number");

    } 
    else if (inputEmail === "") {
        alert("Please type email");
    } 
     else {

      // create a contact
      var newContact = new createContact(uniqueID, inputFirstName, inputLastName, inputPhoneNumber, inputEmail);
    
      // add contact to the list of contacts  
      contactList.push(newContact);
         
      // show the contact
      document.getElementById("contactSubmit").style.display = "block";
      document.getElementById("contactList").style.display = "none";
      showContact(newContact);
      
      // clear the contact form
      document.getElementById("inputFirstName").value = "";
      document.getElementById("inputLastName").value = "";
      document.getElementById("inputPhoneNumber").value = "";
      document.getElementById("inputEmail").value = "";
        
      document.getElementById("contactSubmit").style.display = "block";
      document.getElementById("contactList").style.display = "none";
         console.log(contactList);
         
      // delete sample contact when adding a new contact
      // not needed anymore since we add contact sample through button
   /*   if (contactList[0].id === 0) {
      contactList.shift();
      }*/              
    }
     // save contact to browser cache in JSON
        if (localStorage.getItem('contactStorage') === null) {
            
            localStorage.setItem('contactStorage', JSON.stringify(contactList));
            console.log(contactList);
            
        }
    console.log(contactList);
    
  e.preventDefault();
}

    
/*
    var saveFirstName = document.getElementById('inputFirstName').value;
    var saveLastName = document.getElementById('inputLastName').value;
    
    var contactCache = {
        
        firstName: saveFirstName,
        lastName: saveLastName
        
    }
    
    // add data to local storage test
    localStorage.setItem(contactCache.firstName[0], contactCache.firstName[1]);
    // test local storage
    console.log(localStorage.getItem(contactCache.firstName[0]))
    // delete from local storage
    localStorage.removeItem(contactCache.firstName[0]);

   
    
    if (localStorage.getItem('contactStorage') === null) {
        
        
        var contactStorage = [];
        contactStorage.push(contactCache);
        
        
        localStorage.setItem('contactStorage', JSON.stringify(contactStorage));
        
    } else {
        
        var contactStorage = JSON.parse(localStorage.getItem('contactStorage'));

        contactStorage.push(contactCache);  
        
        localStorage.setItem('contactStorage', JSON.stringify(contactStorage));
        
        
    }
    
    e.preventDefault();
}

*/
