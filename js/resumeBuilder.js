/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Added name and role onto resume created variables name and role and piped them into replace method to replace "%data%" in helper.js file 
var name = "Jacob Garrison";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

//prepend sends variables to the webpage and $("#header") is Qjery for what element to pipe data into. We want to prepend name and role because we want the h2 element displayed before contact information in the header element.
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//This object (think hash) contains contact info that will be appended to id topContacts.
var contactInfoHash = {
	"email": "jgarrison1204@gmail.com",
	"mobile": "818-970-7261",
	"github":  "https://github.com/jgarrison1204",
	"linkedin": "Jacob Garrison",
	"location": "Los Angeles"
};

var formattedMobile = HTMLmobile.replace("%data%", contactInfoHash.mobile);
var formattedEmail = HTMLemail.replace("%data%", contactInfoHash.email);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);


