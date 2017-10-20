var arrayOfContacts = new Array();

var sampleContact =
{
  firstName : "Piotr",
  lastName : "Kowalczyk",
  email : "xxx@gmail.com",
  company : "ICompany",
  localization :
    {
      country : "Poland",
      city : "Warsaw",
    },
  www : "www.jsApp.com"
};

arrayOfContacts.push(sampleContact);

function showContacts(array)
{
    for(var i = 0; i < array.length; i++)
    {
        document.getElementById("name").innerHTML = array[i].firstName + " " + array[i].lastName;
    }
};
