var Record = require( "./record" );
var RecordStore = require( "./record_store" );

var RecordStoreViewer = function( recordStore ) {
	this.recordStore = recordStore;
};

RecordStoreViewer.prototype = {
	// XXX: 1 - create a record store viewer
	render: function( recordStore ) {
		console.log("creating a Record Store in Browser ", recordStore);

		// XXX: 1.2 - Display the name and city of the RecordStore
		var mainHeaderDisplay = document.getElementById('record-store-name');
		mainHeaderDisplay.innerText = recordStore.name;

		var subHeaderDisplay = document.getElementById('record-store-city');
		subHeaderDisplay.innerText = recordStore.city;

		// XXX: 1.1 - Display the inventory list
		var inventoryDisplay = document.getElementById("record-store-inventory");
		for (record of recordStore.inventory) {
			var recordListInventory = document.createElement("li");
			recordListInventory.innerText = "Artist: " + record.artist + ", Album: " + record.album + ", price: £" + record.price.toFixed(2);
			inventoryDisplay.appendChild( recordListInventory );
		}

		var addRecord = function( recordStore, newRecord ) {
			recordStore.addRecordToInventory( newRecord );
		};

		// XXX: 3 Further - Add a FORM to add a new Record to the RecordStore.
		var button = document.getElementById("add-record");
		button.onclick = function( event ) {
			var textArtistInput = document.getElementById("artist-input").value;
			var textAlbumInput = document.getElementById("album-input").value;
			var textPriceInput = document.getElementById("price-input").value;

			var newRecord = new Record( textArtistInput, textAlbumInput, textPriceInput );

			addRecord( recordStore, newRecord );
		};
	},

	storeRecords: function( records ) {
		localStorage.setItem("storedRecords", JSON.stringify( Records ));
	}

	// TODO: 4 Further - Add ability to sell record

};

module.exports = RecordStoreViewer;
