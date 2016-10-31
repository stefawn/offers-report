// Variables

var recruiterTemplate = document.querySelector("#recruiter-template");
var csvSummary = document.querySelector(".res");
var display = document.querySelector(".display");

// Event Listeners

window.addEventListener("load", loadRecruiterData);


// Events

function loadRecruiterData() {
	// console.log(recruiterObject);
	// console.log(testData);
	$.getJSON("offersdata-standalone.json", updateRecruiters);	
	
};

function updateRecruiters(json) {	
	console.log("updateRecruiters");
	console.log(json);
	// compile display template
	// var template = Handlebars.compile(recruiterTemplate.innerHTML);
	
	// display.innerHTML = template(json.recruiterObject);
};
