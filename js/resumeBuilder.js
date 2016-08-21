/*
This is empty on purpose! Your code to build the resume will go here.
 */


//var name = "Akash Garg";
//var role = "Software Engineer";
//var formattedRole = HTMLheaderRole.replace("%data%",role);
//var formattedName = HTMLheaderName.replace("%data%",name);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//var myskills = ["awesomeness","coding"]
$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
})



var bio = {
	"name":"Akash Garg",
	"role":"Software Engineer",
	"contacts":{
		"mobile":"7506122862",
		"email":"akash.garg2007@gmail.com",
		"github":"its-jarvis",
		"location":"Mumbai"
	},
	"welcomeMessage":"Hi Welcome to my page",
	"skills":["awesomeness","delivering things","cryogenic sleeping","saving the universe"],
	"bioPic":"images/me.png"

}

var work ={ 
	"jobs":[
		{
			"title":"Software Engineering Intern",
			"employer":"Samsung Electronics",
			"location":"Suwon, South Korea",
			"dates":"May-July 2016",
			"description":"Did some work"
		},
		{
			"title":"Research Intern",
			"employer":"Inria",
			"location":"Nancy, France",
			"dates":"May-July 2015",
			"description":"Did some work"
		}
	]
}
	

var projects = {
	"projects":[
	{
		"title":"Compiler for Subset of C",
		"dates":"2016",
		"description":"Created a compiler for subset of C programming language",
		"images":["images/me.png","images/me.png"]
	},
	{
		"title":"Django web app",
		"dates":"2014",
		"description":"Created a django web app.",
		"images":["images/me.png","images/me.png"]
	}
	]
};

projects.display = function()
{
	for (project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if(projects.projects[project].images.length>0)
		{
			for( image in projects.projects[project].images)
			{
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
		
	}
}

projects.display();

var education = 
{
	"schools":[
	{
		"name":"IIT Bombay",
		"location":"Mumbai",
		"degree":"B.Tech",
		"majors":["CS"],
		"dates":2017,
		"url":"www.cse.iitb.ac.in/~akash"
	},
	{
		"name":"de'Saint Public School",
		"location":"Uttar Pradesh",
		"degree":"High School",
		"majors":["CS"],
		"dates":2013,
		"url":"www.cse.iitb.ac.in/~akash"
	}
	]
}

education.display = function()
{
	for(school in education.schools)
	{
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedSchoolNameDegree = formattedSchoolName+formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolNameDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);

	}
}

education.display();


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var biopic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
//var formattedContect = HTMLcontactGeneric.replace("%data%",formattedMobile+formattedEmail+formattedGithub+formattedLocation);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

$("#header").append(biopic);
$("#header").append(formattedWelcomeMessage);


$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);

//$("#main").append(internationalizeButton);

function inName()
{
	//console.log("Hello");
	var name = bio.name;
	var namearray = name.split(" ");
	var firstname = namearray[0];
	var lastname = namearray[1];
	firstname = firstname.charAt(0).toUpperCase()+firstname.slice(1).toLowerCase();
	lastname = lastname.toUpperCase();
	return firstname+" "+lastname; 
}

function displayWork(){
	for(job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	
	
	}
}

displayWork();


if(bio.skills.length!=0)
{
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0])
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[1])
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[2])
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[3])
	$("#skills").append(formattedSkill);

}
$("#mapDiv").append(googleMap);

//$("#main").append(work["position"])
//$("#main").append(education.name)


//$("#main").append(bio);