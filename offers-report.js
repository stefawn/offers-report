// Table plugin
// ------------------------------------
$(document).ready(function() {
    $('table.display').DataTable();
} );

// Get data

$.getJSON("offers-data.json", loadOffers);

// Selectors and variables
// ------------------------------------
var offersTable = document.querySelector("#table-template");
var offersRow = document.querySelector(".table_row");
var display = document.querySelector(".display");
var offersData = [];


// Variables
// ------------------------------------


// Events
// ------------------------------------
// window.addEventListener("load", loadOffers);


// Handlebars template
function loadOffers(json) {
    console.log(json); // this will show the info it in firefox console

    offersData = json;

    // var template = Handlebars.compile(offersTable.innerHTML);

    // display.innerHTML = template(json);

};


// function updateRestaurants(json) {
// 	clearPrevious();
// 	// compile results template
// 	var template = Handlebars.compile(headerTemplate.innerHTML);
// 	results.innerHTML = template(json);
// 	// compile display template
// 	template = Handlebars.compile(restaurantTemplate.innerHTML);
// 	display.innerHTML = template(json.restaurants);

// 	json.restaurants.forEach(savePinLocations);

// 	createMarkers();
// }