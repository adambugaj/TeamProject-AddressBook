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

var sampleContact1 =
    {
        firstName : "Bill",
        lastName : "Gates",
        email : "xxx@gmail.com",
        company : "Microsoft",
        localization :
            {
                country : "USA",
                city : "San Francisco",
            },
        www : "www.microsoft.com"
    };

arrayOfContacts.push(sampleContact);
arrayOfContacts.push(sampleContact1);

function showContacts(array)
{
    for(var i = 0; i < array.length; i++)
    {
        $("#list").append(array[i].firstName + " " + array[i].lastName + "<br/>");
    }
};
