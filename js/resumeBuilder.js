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
var skills = ["Project Management", "CRM", "Data Analysis", "SQL", "Ruby", "VBA", "HTML", "CSS", "JS"];

//This object contains contact info that will be appended to id topContacts. Will play with elminating the name and role variables from lines 6 and 7 and replacing with values from this object.
var bio = {
	"name": "Jacob Garrison",
	"role": "Web Developer",
	"contactInfo": contactInfoHash,
	"skills": skills,
	"welcomeMessage": "Welcome to my resume!",
	"picture": "images/fry.jpg"
};

//Create varibles to utilize html written in helper.js
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills)

//append welcome message and bio information to the header container after the topContacts element.
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

//objects for work and employment sections of resume
var work = {
	"startDate": "February 2014",
	"jobTitle": "Senior Data Analyst",
	"employer": "California State University, Los Angeles",
	"yearsWorked": "2014-2016",
	"employerCity": "Los Angeles"
};


//Create varibles to utilize html written in helper.js
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobTitle);
						

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedEmployer,formattedJobTitle);

//Education Section
var education = {
	"lastSchool": "University of Chicago - Masters",
	"datesAttended": "2008-2009",
	"schoolCity": "Chicago"
};

//varibles for formatting
var formattedlastSchool = HTMLschoolName.replace("%data%", education.lastSchool);
var formattedDatesAttended = HTMLschoolDates.replace("%data%", education.datesAttended);


$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedlastSchool, formattedDatesAttended);