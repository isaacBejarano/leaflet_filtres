"use strict";

import Restaurant from "../models/Restaurant.js"; // JS class
import "../../sass/main.scss"; // SASS module

const startZoom = 9;
const mapCenter = [41.4, 2.206];
const mapBCN = L.map("mapBCN").on("load", onMapLoad).setView(mapCenter, startZoom);
const cluster = L.markerClusterGroup();
let restaurants = []; // Restaurant[]
let currentCoordinates = []; // to update setView
const selector = document.getElementById("kind_food_selector");
const disabledOption = document.querySelector(`#${selector.id} > option:first-child`);
const disabledOptionText = "Select restaurants by..";
const tilesURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
let toggleAll = false;

disabledOption.textContent = disabledOptionText; // <select>

// tiles
L.tileLayer(tilesURL, { attribution }).addTo(mapBCN);

/* XHR - onload */
function onMapLoad() {
	// AJAX
	$(() => {
		// XHR request
		$.ajax({
			type: "GET",
			url: "http://localhost/map/api/restaurants.php",
			dataType: "json",
			success: response => {
				for (let res of response) {
					// 3.1.1 Restaurant instances
					new Restaurant(
						// prettier-ignore
						res.id_restaurant,
						res.name,
						res.address,
						res.kind_food,
						+res.lat, // parsed int
						+res.lng // parsed int
					);
				}

				// 3.1.1 fill up
				restaurants = Restaurant.getList;

				// 3.1.2 dynamic <select>
				let foodTags = [];
				let kinds = new Set(); // don't repeat foodTags

				// get all foodTags and excude duplicated
				for (let restaurant of Restaurant.getList) {
					foodTags.push(...restaurant.getKind.split(","));
				}

				for (let tag of foodTags) {
					kinds.add(tag);
				}

				for (let kind of kinds.keys()) {
					const inputSelect = document.getElementById("kind_food_selector");
					const option = document.createElement("option");

					// HTML append
					inputSelect.append(option);

					// data inject
					option.value = kind;
					option.textContent = kind;

					// CSS
					option.classList.add("bg-dark", "text-light", "font-weight-lighter");
				}

				// 3.1.3 show all markers
				render_to_map("all");
			},
			error: (xhr, status, error) => {
				console.log(xhr, status, error);
			},
		});
	});
}

/* EVENTS */

// <select> -> filter
$(selector).on("change", function () {
	toggleAll = false; // default
	render_to_map(this.value);
});

// <button> -> toggle all
$("#btn-show-all").on("click", function () {
	if (selector.value !== disabledOptionText) {
		toggleAll = !toggleAll;
		toggleAll ? render_to_map("all") : render_to_map(selector.value);
	}
});

/* LIB */

function render_to_map(filtro) {
	let filtered = [];

	// 3.2.1 clear cluster
	cluster.clearLayers();

	// 3.2.2 filter restaurants + update cluster of markers
	if (filtro === "all") filtered = restaurants;
	else {
		for (let restaurant of restaurants) {
			let kindsPerRestaurant = restaurant.getKind.split(",");
			let filtering = kindsPerRestaurant.filter(kind => kind === filtro);

			if (filtering.length > 0) filtered.push(restaurant);
		}
	}

	// mark on "all" or filtred
	for (let restaurant of filtered) {
		let marker = L.marker(restaurant.getCoordinates).bindPopup(`
			<b class="d-block">${restaurant.getName}</b>
			<span class="d-block  pb-2">${restaurant.getKind.replace(',',', ')}</span>
			<span class="d-block">${restaurant.getAddress}</span>
			`);

		cluster.addLayer(marker);
	}

	// 3.2.3 re-render cluster
	mapBCN.addLayer(cluster);

	// 3.2.4 reset View <-> centroid coordinates
	currentCoordinates = []; // reset previous

	for (let restaurant of filtered) {
		currentCoordinates.push(restaurant.getCoordinates);
	}

	// current latitudes + longitudes
	let lats = currentCoordinates.map(cC => cC[0]);
	let lngs = currentCoordinates.map(cC => cC[1]);

	// new view is centroid of cluster
	mapBCN.setView(centroid(lats, lngs), mapBCN.zoom);
}

/* AUX */

function centroid(_lats, _lngs) {
	return [avg(_lats), avg(_lngs)]; // [int, int]
}

function avg(coordinates) {
	let sum = 0; // int

	for (let c of coordinates) {
		sum += c;
	}

	return sum / currentCoordinates.length; // average center
}
