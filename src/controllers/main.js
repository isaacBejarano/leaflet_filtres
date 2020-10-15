"use strict";

import "../models/Fetch"; // Fetch class
import "./ajax"; // fetch logic
import "../../sass/main.scss"; // SASS module
import Restaurant from "../models/Fetch";

const mapBCN = L.map("mapBCN").on("load", onMapLoad).setView([41.4, 2.206], 9);
//map.locate({setView: true, maxZoom: 17});

const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(mapBCN);

// cluster of markers
let cluster = L.markerClusterGroup();

let data_markers = []; // Restaurant[]

/* ON LOAD */
function onMapLoad() {
	// AJAX
	$(() => {
		// XHR request
		$.ajax({
			type: "GET",
			url: "http://localhost/mapa/api/restaurants.php",
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
						res.lat,
						res.lng
					);
				}

				data_markers = Restaurant.getList; // 3.1.1 fill up

				// 3.1.2 dynamic <select>
				let inputSelect = document.getElementById("kind_food_selector");

				// SET (don't repeat kinds)
				let kinda = new Set();

				for (let restaurant of Restaurant.getList) {
					kinda.add(restaurant.getKind);
				}

				for (let kind of kinda.keys()) {
					// HTML append
					const option = document.createElement("option");
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

/* EVENT */
$("#kind_food_selector").on("change", function () {
	render_to_map(this.value);
});

/* LIB */
function render_to_map(filtro) {
	// 3.2.1
	cluster.clearLayers(); // clear cluster

	// 3.2.2
	let filtered = [];

	// filter restaurants to mark
	if (filtro === "all") filtered = data_markers;
	else filtered = data_markers.filter(data => data.getKind == filtro);

	// update cluster with filtered markers
	for (let data of filtered) {
		let marker = L.marker(data.getCoordinates).bindPopup(`
			<b class="d-block">${data.getName}</b>
			<span class="d-block  pb-2">${data.getKind}</span>
			<span class="d-block">${data.getAddress}</span>
			`);

		cluster.addLayer(marker);
	}

	// render cluster
	mapBCN.addLayer(cluster);

	// CENTER CLUSTER SETVIEW !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
