/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Added  
var name = "Jacob Garrison";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

