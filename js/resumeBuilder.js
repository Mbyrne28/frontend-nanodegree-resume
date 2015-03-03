var awesomeThoughts = "I am totally awesome!";

var funThoughts = awesomeThoughts.replace("awesome", "Fun");

//console.log(awesomeThoughts);
//console.log(funThoughts);

//$("#main").append(funThoughts);
//var myName = "Matthew Byrne";
//var formattedName = HTMLheaderName.replace("%data%",myName);

//var myRole = "Front-end Ninja";
//var formattedRole = HTMLheaderRole.replace("%data%",myRole);

//$("#main").prepend(formattedRole);
//$("#main").prepend(formattedName);

//"audacity" to "Udacity".
//var wrong = "audacity";

//var firstCharUpper = wrong.charAt(1).toUpperCase();
//var right = firstCharUpper +  wrong.slice(2,wrong.length);

function stripCapitalise(s) {

    s = s.charAt(1).toUpperCase() + s.slice(2, s.length);

    return s;
};

//console.log(stripCapitalise("audacity"));
//debug(stripCapitalise("audacity"));
//***************************//

var sampleArray = [0, 0, 7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.

    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];

    // Your code goes in here!
    newArray = _array;

    newArray[newArray.length - 1] = newArray[newArray.length - 1] + 1;

    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
//debug(incrementLastArrayElement(sampleArray));


//var name = "AlbERt EINstEiN";
var name = "Larry MADRIGAL";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    finalName = finalName.split(' ');
    finalName = finalName[0].toLowerCase() + ' ' + finalName[1].toUpperCase();
    finalName = finalName.slice(0,1).toUpperCase()+finalName.slice(1,finalName.length-1);

    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
//debug(nameChanger(name));

var bio = {
"name": "Matthew Byrne",
"role": "Web Ninja",
"contactInfo":{
    "email":"matt.byrne@yahoo.co.uk"
},
"welcomeMSG": "Hello there!",
"skills": ["Thinking", "Presenting", "Design"],
"bioPic": "images/fry.jpg"
}
//debug(bio["skills"])
//var formattedSkills = HTMLskills.replace("%data%",bio["skills"]);
//$("#topContacts").prepend(formattedSkills);
//var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio["welcomeMSG"]);
//$("#main").prepend(formattedWelcome);
//var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
//$("#topContacts").prepend(formattedEmail);
var formattedRole = HTMLheaderRole.replace("%data%",bio["role"]);
$("#main").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%",bio["name"]);
$("#main").prepend(formattedName);
var bioPic = HTMLbioPic.replace("%data%",bio["bioPic"]);
$("#topContacts").prepend(bioPic);

bio.work = {"employer":"Saatchi", "position":"copywriter"};

addContent(HTMLskills, bio.skills, "#topContacts");
addContent(HTMLWelcomeMsg, bio.welcomeMSG, "#topContacts");
addContent(HTMLemail, bio.contactInfo.email, "#topContacts");
addContent(HTMLworkEmployer, bio.work.employer, "#topContacts");

function addContent(htmlSection, bioItem, where){

    var contentItem = htmlSection.replace("%data%", bioItem);
    $(where).prepend(contentItem);

}





