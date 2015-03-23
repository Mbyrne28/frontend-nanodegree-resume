var bio = {
    "name": "Matthew Byrne",
    "role": "UX Ninja",
    "contacts": {
        "mobile": "07790 997 661",
        "email": "matt.byrne@yahoo.co.uk",
        "github": "string",
        "twitter": "string",
        "location": "string"
    },
    "welcomeMessage": "Hello world, how are you?",
    "skills": [
        "Typing",
        "Listening",
        "Design"
    ],
    "biopic": "images/fry.jpg",
    "display": "function taking no parameters"
};

var education = {
    "schools": [
        {
            "name": "string",
            "location": "string",
            "degree": "string",
            "majors": "array of strings",
            "dates": "integer (graduation date)",
            "url": "string"
        }
    ],
    "onlineCourses": [
        {
            "title": "string",
            "school": "string",
            "date": "integer (date finished)",
            "url": "string"
        }
    ],
    "display": "function taking no parameters"
};

var work = {
    "jobs": [
        {
            "employer": "string",
            "title": "string",
            "location": "string",
            "dates": "string (works with a hyphen between them)",
            "description": "string"
        }
    ],
    "display": "function taking no parameters"
};

var projects = {
    "projects": [
        {
            "title": "string",
            "dates": "string (works with a hyphen between them)",
            "description": "string",
            "images": "array with string urls"
        }
    ],
    "display": "function taking no parameters"
}


/*
var formattedName = HTMLheaderName.replace("%data%", bio.name)
var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts.mobile)

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").prepend(formattedContactGeneric);

console.log(formattedName)*/
//debug("hello")

//for (item in bio){
  //debug(bio[item])
  //$("#topContacts").prepend(bio[item]);
//}

//function addContent(htmlSection, bioItem, where){

//    var contentItem = htmlSection.replace("%data%", bioItem);
//    $(where).prepend(contentItem);

//}