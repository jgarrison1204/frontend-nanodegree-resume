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
	"github":  "jgarrison1204",
	"twitter": "@jg1204",
	"location": "Los Angeles"
};

//creating variables to replace "%data%" text in HTML located in helper.js file.
var formattedMobile = HTMLmobile.replace("%data%", contactInfoHash.mobile);
var formattedEmail = HTMLemail.replace("%data%", contactInfoHash.email);
var formattedGithub = HTMLgithub.replace("%data%", contactInfoHash.github);
var formattedLinkedin = HTMLtwitter.replace("%data%", contactInfoHash.twitter);
var formattedLocation = HTMLlocation.replace("%data%", contactInfoHash.location);

//append contact information to the topContacts <ol> element after the h2 element in the header container.
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLinkedin);
$("#topContacts").append(formattedLocation);

//Bio section: array of skills we want displayed.
var skils = ["Project Management", "CRM", "Data Analysis", "SQL", "Ruby", "VBA", "HTML", "CSS", "JS"];

//This object contains contact info that will be appended to id topContacts. Will play with elminating the name and role variables from lines 6 and 7 and replacing with values from this object.
var bio = {
	"name": "Jacob Garrison",
	"role": "Web Developer",
	"contactInfo": contactInfoHash,
	"skills": skils,
	"welcomeMessage": "Welcome!",
	"picture": "images/fry.jpg"
};
