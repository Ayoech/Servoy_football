/**
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7F89E28A-4DC6-4DC6-AE01-EE798E807671"}
 */
var searchText = null;
/*
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DED36204-9C32-4619-87B2-E52094456185"}
 */


/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or when the ENTER key is used (then only the selected foundset index is given).
 * Use the record to exactly match what the user clicked on.
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 * @param {String} [columnid]
 *
 * @properties={typeid:24,uuid:"DC806171-AD31-42A6-BEBC-111CD90D83D4"}
 */

/**
 * Handle changed data for the search textbox.
 * @param {String} oldValue
 * @param {String} newValue
 * @param {JSEvent} event
 * @return {Boolean}
 * @properties={typeid:24,uuid:"F1A2B3C4-5D6E-7F80-1234-9ABCDEFFEDCB"}
 * @AllowToRunInFind
 */

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"249F55EC-2747-49A8-A084-230806A8DE34"}
 */
function onClick(event) {
	// TODO Auto-generated method stub
	var win = application.createWindow('myWin', JSWindow.MODAL_DIALOG);
    win.title = 'Add Evaluation';
    win.setSize(380, 280);
    win.setLocation(500,60)
    win.show(forms.evaluation_form);

}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * The foundsetindex is always -1 when there are grouped rows.
 * If you use enabled=false on a column, make sure to test in the handler for columnindex so you only execute the code for that column IF the columnindex is for that column.
 *
 * @param {Number} foundsetindex
 * @param {Number} columnindex
 * @param {JSRecord} record
 * @param {JSEvent} [event]
 * @param {String} [dataTarget]
 *
 * @properties={typeid:24,uuid:"DD1D5CC5-7E5B-4B4F-86B3-B30453BBA6CC"}
 */


/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * The foundsetindex is always -1 when there are grouped rows.
 * If you use enabled=false on a column, make sure to test in the handler for columnindex so you only execute the code for that column IF the columnindex is for that column.
 *
 * @param {Number} foundsetindex
 * @param {Number} columnindex
 * @param {JSRecord} record
 * @param {JSEvent} [event]
 * @param {String} [dataTarget]
 *
 * @properties={typeid:24,uuid:"E50EC65C-BD53-4A3D-99DB-5BC0D7F13A59"}
 */


/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * The foundsetindex is always -1 when there are grouped rows.
 * If you use enabled=false on a column, make sure to test in the handler for columnindex so you only execute the code for that column IF the columnindex is for that column.
 *
 * @param {Number} foundsetindex
 * @param {Number} columnindex
 * @param {JSRecord} record
 * @param {JSEvent} [event]
 * @param {String} [dataTarget]
 *
 * @properties={typeid:24,uuid:"9B59D070-8BBB-48C2-BEA6-2A9F722969CF"}
 */


/**
 * @param foundsetindex
 * @param columnindex
 * @param record
 * @param event
 * @param columnId
 * @override
 *
 * @properties={typeid:24,uuid:"84F5C5CF-8276-459B-B926-CB51D970403D"}
 */


/**
 * @properties={typeid:24,uuid:"8F635E7E-23D5-48BE-AC7A-F733FAF5C73A"}
 */


/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * The foundsetindex is always -1 when there are grouped rows.
 * If you use enabled=false on a column, make sure to test in the handler for columnindex so you only execute the code for that column IF the columnindex is for that column.
 *
 * @param {Number} foundsetindex
 * @param {Number} columnindex
 * @param {JSRecord} record
 * @param {JSEvent} [event]
 * @param {String} [dataTarget]
 *
 * @properties={typeid:24,uuid:"6AD35E0C-D49D-4E15-B553-CD9ED81473F9"}
 */
function onTrashIconClick(foundsetindex, columnindex, record, event, dataTarget) {
	// TODO Auto-generated method stub
	if(columnindex == 4){
		var answer = plugins.dialogs.showQuestionDialog('Confirm delete',
			'Delete selected record?',
			'Delete',
			'Cancel');
		if (answer == 'Delete') {
			foundset.deleteRecord();
			databaseManager.saveData();
		}
	}

}

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"9DA1822B-A7F7-4E4B-8C43-35E4FA602EB1"}
 * @AllowToRunInFind
 */
function onDataChange(oldValue, newValue, event) {
	application.output('fired');
	application.output('Data changed from ' + oldValue + ' to ' + newValue);
	// TODO Auto-generated method stub
	application.output('event: ' + event);
	application.output(elements.typeahead_1.toolTipText);
	
	if (1) {
		if (foundset.find()) { // Enter find mode
			foundset.skill = 98; // Assign a search criteria
			foundset.search(); // Execute the query and load the records
		}
	}
	return true;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75AF2B77-8D9D-4477-87A4-EF6760554487"}
 */

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param value
 * @param event
 * @param keyCode
 * @param altKey
 * @param ctrlKey
 * @param shiftKey
 * @param capsLock
 *
 * @properties={typeid:24,uuid:"A14A90B7-915E-4A1F-AC0A-9C543F23D1E0"}
 */


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D63E18C0-45B3-4FD0-BA35-2C5203E4E80F"}
 */


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E9288A7B-806D-47D1-9A20-B2405A51D18D"}
 */
function onSearch(event) {
	// TODO Auto-generated method stub
	application.output('searching for: ' + elements.textbox_1.placeholderText);
	var search = scopes.svySearch.createSimpleSearch(foundset);
	search.setSearchText(searchText);
	var searchProviders = ['player_name', 'skill'];
	for (var i = 0; i < searchProviders.length; i++) {
		search.addSearchProvider(searchProviders[i]);
	}
	search.loadRecords(foundset);
	
}

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"C046F601-81CA-49F2-9ED9-F1168C6D0CB6"}
 */
function onChange(oldValue, newValue, event) {
	application.output('fired');
	application.output('Data changed from ' + oldValue + ' to ' + newValue);
	// TODO Auto-generated method stub
	return true
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"32172156-31A0-45E7-AEDF-46167B19E6FD"}
 */


/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope) - present since 2021.06 release
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"7EB812C9-FFF8-4873-ACCC-F2570E4C5D45"}
 */
function onChangeInput(oldValue, newValue, event) {
	
	// TODO Auto-generated method stub
	application.output('fired');
	return true
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"89914C82-72CA-4E97-ADD9-3A9787F65459"}
 */


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1943C215-0B04-4EA1-A88E-536D0BE67010"}
 * @AllowToRunInFind
 */
function onAction(event) {
	// TODO Auto-generated method stub
	application.output('searching for: ' + searchText);
	if(foundset.find()) { 
		foundset.evaluation_player.name = searchText;
		foundset.search();
		
	}
}
