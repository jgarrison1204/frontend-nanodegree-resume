/*
This is empty on purpose! Your code to build the resume will go here.
 */
// JSON objects containing data to populate resume
var bio = {
	"name": "Jacob Garrison",
	"role": "Web Developer",
	"contacts": {
		"mobile": "818-970-7261",
		"email": "jgarrison1204@gmail.com",
		"github": "jgarrison1204",
		"location": "Los Angeles"
	},
	"skills": ["Project Management", "CRM", "Data Analysis", "Process Builder"],
	"welcomeMessage": "Welcome, please learn about my professional history.",
	"biopic": "images/fry.jpg",
};
var education = {
	"schools": [{
		"name": "University of Chicago",
		"degree": "M.A.",
		"location": "Chicago",
		"majors": ["Social Sciences"],
		"dates": "2008-2009",
		"url": "http://www.uchicago.edu/"
	}, {
		"name": "University of California San Diego",
		"location": "La Jolla",
		"degree": "B.A.",
		"majors": ["Political Science", "History"],
		"dates": "2003-2007",
		"url": "https://ucsd.edu/"
	}],
	"onlineCourses": [{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	}]
};
var work = {
	"jobs": [{
		"employer": "California State University, Los Angeles",
		"title": "Senior Data Analyst",
		"location": "Los Angeles, CA",
		"dates": "2014-Present",
		"description": "Created a culture of data driven decision making and accountability through: implementing a CRM system, designing workflows, Marcom and business process for 100 professionals, completed analytic studies and presented results with engaging and interactive visualizations for all levels of the organization."
	}, {
		"employer": "Paramount Pictures",
		"title": "Manager, Marketing Research and Strategy",
		"location": "Hollywood, CA",
		"dates": "2012-2013",
		"description": "Advised movie executives, film-makers and creatives on audience reaction to films, trailers and T.V. spots.  Offered consultative insights to track and improve performance of marketing materials and film editing."
	}, {
		"employer": "Lieberman Research Worldwide",
		"title": "Research Manager",
		"location": "Beverly Hills, CA",
		"dates": "2011-2012",
		"description": "Lead project manager and consultant for numerous Fortune 500 clients across verticals charged with ensuring strong margins for our boss and actionable insights for our clients."
	}]
};
var projects = {
	"projects": [{
		"title": "Portfiolio",
		"dates": "2016",
		"description": "An responsive website that contains recent projects I've worked on.",
		"images": ["http://placehold.it/200x150", "http://placehold.it/200x150"]
	}]
};
//encapsulated function => display that renders header element and bio data.
bio.display = function() {
	//creating variables to replace "%data%" text in HTML located in helper.js file.
	formattedName = HTMLheaderName.replace("%data%", bio.name);
	formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic, formattedWelcomeMsg, HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		formattedSkills = HTMLskills.replace("%data%", skill);
		$("#skills:last").append(formattedSkills);
	});
	$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
	$("#header").prepend(formattedName, formattedRole);
};
work.display = function() {
	work.jobs.forEach(function(job) {
		//populates the work workExperience container
		$("#workExperience").append(HTMLworkStart);
		//creates varaible for attributes to replace data in helper file.
		employerFormatted = HTMLworkEmployer.replace("%data%", job.employer);
		titleFormatted = HTMLworkTitle.replace("%data%", job.title);
		formattedHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);
		formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);
		formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);
		//concatinates the varibles so they appear on the same line
		formattedEmployerTitle = employerFormatted + titleFormatted;
		$(".work-entry:last").append(formattedEmployerTitle, formattedHTMLworkDates, formattedHTMLworkLocation, formattedHTMLworkDescription);
	});
};
projects.display = function() {
	projects.projects.forEach(function(projectKey) {
		formattedTitle = HTMLprojectTitle.replace("%data%", projectKey.title);
		formattedDates = HTMLprojectDates.replace("%data%", projectKey.dates);
		formattedDesc = HTMLprojectDescription.replace("%data%", projectKey.description);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDesc);
		projectKey.images.forEach(function(imageArry) {
			fomrattedImages = HTMLprojectImage.replace("%data%", imageArry);
			$(".project-entry:last").append(fomrattedImages);
		});
	});
};
education.display = function() {
	$("#education").append(HTMLschoolStart);
	education.schools.forEach(function(school) {
		formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
		formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		formattedSchoolAndDegree = formattedSchoolName + formattedSchoolDegree;
		formattedSchoolAndDegree = formattedSchoolAndDegree.replace("#", school.url);
		formattedDatesAttended = HTMLschoolDates.replace("%data%", school.dates);
		formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedSchoolAndDegree, formattedDatesAttended, formattedLocation);
		// $("a").attr("href", school.url);
		school.majors.forEach(function(major) {
			formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
			$(".education-entry:last").append(formattedSchoolMajor);
		});
	});
	$(".education-entry:last").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(onlineclass) {
		formattedTitle = HTMLonlineTitle.replace("%data%", onlineclass.title);
		formattedSchool = HTMLonlineSchool.replace("%data%", onlineclass.school);
		formattedTitleAndSchool = formattedTitle + formattedSchool;
		formattedDates = HTMLonlineDates.replace("%data%", onlineclass.dates);
		formattedUrl = HTMLonlineURL.replace("%data%", onlineclass.url);
		$(".education-entry:last").append(formattedTitleAndSchool, formattedDates, formattedUrl);
	});
};
$("#mapDiv").append(googleMap);
//calls functions and renders html to the page
bio.display();
work.display();
projects.display();
education.display();