var awesomeThoughts = "I am totally awesome!";

var funThoughts = awesomeThoughts.replace("awesome","Fun");

console.log(awesomeThoughts);
console.log(funThoughts);

//$("#main").append(funThoughts);
var myName = "Matthew Byrne";
var formattedName = HTMLheaderName.replace("%data%",myName);

var myRole = "Front-end Ninja";
var formattedRole = HTMLheaderRole.replace("%data%",myRole);

$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);

//"audacity" to "Udacity".
var wrong = "audacity";

var firstCharUpper = wrong.charAt(1).toUpperCase();
var right = firstCharUpper +  wrong.slice(2,wrong.length);

console.log(right);
