// TODO: 2 Create a new record store in app.js
var RecordStore = require( "./record_store/record_store" );
var SampleRecords = require( "./sample_records.json" );
var Record = require( "./record_store/record.js" );
var RecordStoreViewer = require( "./record_store/record_store_viewer.js" );

window.onload = function() {

	var storedRecords = JSON.parse(localStorage.getItem("storedRecords")) || SampleRecords;

	var recordStore = new RecordStore( "Rough Trader Records", "Edinburgh", 100 );
	for ( recordData of storedRecords ) {
		recordStore.addRecordToInventory(new Record(recordData.artist, recordData.album, recordData.price));
	}

	var recordStoreViewer = new RecordStoreViewer( recordStore );
	console.log(recordStore);

};
