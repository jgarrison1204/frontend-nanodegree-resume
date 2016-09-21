/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name": "Jacob Garrison",
	"role": "Web Developer",
	"contacts": {
		"mobile": "818-970-7261",
		"email": "jgarrison1204@gmail.com",
		"github":  "jgarrison1204",
		"location": "Los Angeles"
	},
	"skills": ["Project Management", "CRM", "Data Analysis", "SQL", "Ruby", "VBA", "HTML", "CSS", "JS"],
	"welcomeMessage": "Welcome, please learn about my professional history.",
	"picture": "images/fry.jpg",
}

var education = {
	"schools":[
	{
		"name": "University of Chicago",
		"location": "Chicago",
		"degree": "M.A.,",
		"majors": ["Social Sciences"],
		"dates": "2008-2009",
		"url": "http://www.uchicago.edu/"
	},
	{
		"name": "University of California San Diego",
		"location": "La Jolla",
		"degree": "B.A.",
		"majors": ["Political Science", "History"],
		"dates": "2003-2007",
		"url": "https://ucsd.edu/"
	}
	],
	"onlineCourses":[
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	}
	]
}

var work = {
	"jobs":[
		{
			"employer": "California State University, Los Angeles", 
		   	"title": "Senior Data Analyst", 
		   	"location": "Los Angeles, CA", 
		   	"dates": "2014-Present", 
		   	"description": "Created a culture of data driven decision making and accountability through: implementing a CRM system, designing workflows, Marcom and business process for 100 professionals, completed analytic studies and presented results with engaging and interactive visualizations for all levels of the organization." 			
		},
		{
		   	"employer": "Paramount Pictures", 
		   	"title": "Manager, Marketing Research and Strategy", 
		   	"location": "Hollywood, CA", 
		   	"dates": "2012-2013", 
		   	"description": "Advised movie executives, film-makers and creatives on audience reaction to films, trailers and T.V. spots.  Offered consultative insights to track and improve performance of marketing materials and film editing." 

		},
		{
			"employer": "Lieberman Research Worldwide", 
		   	"title": "Research Manager", 
		   	"location": "Beverly Hills, CA", 
		   	"dates": "2011-2012", 
		   	"description": "Lead project manager and consultant for numerous Fortune 500 clients across verticals charged with ensuring strong margins for our boss and actionable insights for our clients." 
		}
	]
}

var projects = {
		"projects": [
			{
				"title": "Portfiolio",
				"dates": "2016",
				"description": "An responsive website that contains recent projects I've worked on.",
				"images": ["http://placehold.it/200x150","http://placehold.it/200x150"]
			}
		]

}

/*for in loop for appending employer and job title to web page.
"job" is the variable that is iterally the value in the array (0,1,2) not the content of the array. work is the variable jobs is an array of objects. 
*/
function displayWork(){
	for (job in work.jobs){
		if (work.jobs.hasOwnProperty(job)) {
			//populates the work workExperience container
			$("#workExperience").append(HTMLworkStart);
			//creates varaible for employer name to replace data in helper file.
			var EmployerFormatted = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			//creates varaible for job title name to replace data in helper file.
			var TitleFormatted = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			//concatinates the varibles so they appear on the same line
			var formattedEmployerTitle = EmployerFormatted + TitleFormatted;
			var formattedHTMLworkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			//adds last here because append acts on each element in the set of matched elements. So if you have three .work-entry divs and you do a workStuff.append('.work-entry) statement, append will add workStuff to all of the .work-entry divs that exist when the statement is run. Using :last restricts the selector to consider only the last matching element. So the first time through the loop, the first (and only) .work-entry div is the last .work-entry div:
			$(".work-entry:last").append(formattedEmployerTitle, formattedHTMLworkDates,formattedHTMLworkLocation,formattedHTMLworkDescription);
		}
	}
};

displayWork();

for(job in work.jobs){
	if (work.jobs.hasOwnProperty(job)){
		console.log(work.jobs[job]);
	}
};