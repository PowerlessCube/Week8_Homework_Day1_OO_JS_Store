var RecordStoreViewer = function( recordStore ) {
	this.recordStore = recordStore;
};

RecordStoreViewer.prototype = {
	// XXX: 1 - create a record store viewer
	render: function( recordStore ) {
		console.log("creating a Record Store in Browser ", recordStore);

		var mainHeaderDisplay = document.getElementById('record-store-name');
		mainHeaderDisplay.innerText = recordStore.name;

		var subHeaderDisplay = document.getElementById('record-store-city');
		subHeaderDisplay.innerText = recordStore.city;

		var inventoryDisplay = document.getElementById("record-store-inventory");
		for (record of recordStore.inventory) {
			var recordListInventory = document.createElement("li");
			recordListInventory.innerText = "Artist: " + record.artist + ", Album: " + record.album + ", price: " + record.price.toFixed(2);
			inventoryDisplay.appendChild( recordListInventory );
		}


		// TODO: 1.1 - Display the inventory list

		// TODO: 1.2 - Display the name and city of the RecordStore


	}
// TODO: 3 Further - Add a FORM to add a new Record to the RecordStore.
// TODO: 4 Further - Add ability to sell record

};

module.exports = RecordStoreViewer;
