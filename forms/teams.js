/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1C1A25A8-CA56-47F7-9AC7-BF5DEEBC4247"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var rec = foundset.createRecord();

	// optional: set defaults

	var answer = plugins.dialogs.showQuestionDialog('Confirm',
		'Do you want to save the changes?',
		'Yes',
		'No'
	);
	// save to database
	if (answer == 'Yes') {
		databaseManager.saveData();
	}

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"11E6DD4D-165D-4038-BF6F-C7F75C68E6C3"}
 */
function onClickBtn(event) {
	// TODO Auto-generated method stub
	var rec = foundset.createRecord();;

    // optional: set defaults
   
	  var answer = plugins.dialogs.showQuestionDialog(
      'Confirm',
      'Do you want to save the changes?',
      'Yes',
      'No'
      );
    // save to database
	  if (answer == 'Yes') {
	        databaseManager.saveData();
	   }

}

/**
 * Called when the selected rows have changed.
 *
 * @param {Boolean} [isgroupselection]
 * @param {String} [groupcolumnid]
 * @param [groupkey]
 * @param {Boolean} [groupselection]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"5983284D-9ADD-487B-8941-3E8AAC6D94F2"}
 */
function onSelectedRowsChanged(isgroupselection, groupcolumnid, groupkey, groupselection, event) {
	// TODO Auto-generated method stub

	var answer = plugins.dialogs.showQuestionDialog('Confirm delete',
		'Delete ' + count + ' selected record(s)?',
		'Delete',
		'Cancel'
	);

	if (answer == 'Delete') {
		foundset.deleteRecord();
		databaseManager.saveData();
	}

}



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
 * @properties={typeid:24,uuid:"1BC155DE-BB56-4702-A41F-8640A5FCE932"}
 */
function onTrashClick(foundsetindex, columnindex, record, event, columnid) {
	// TODO Auto-generated method stub
	if (columnid == 'id3') {
		var answer = plugins.dialogs.showQuestionDialog('Confirm delete',
			'Delete selected record?',
			'Delete',
			'Cancel'
		);
	}

	if (answer == 'Delete') {
		foundset.deleteRecord();
		databaseManager.saveData();
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
 * @properties={typeid:24,uuid:"4C7BC001-B159-45FC-9583-BC0AA36D747B"}
 */

/**
 * Called when the form is shown. Ensures the teams chart has a labeled dataset so the legend doesn't show 'undefined'.
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"AABBCCDD-1122-3344-5566-77889900AABB"}
 */

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"97C95D2C-9D29-4CE4-B27E-1144E0268EE8"}
 */
function onAction1(event) {
	// TODO Auto-generated method stub
	var win = application.createWindow('myWin', JSWindow.MODAL_DIALOG);
    win.title = 'Add Team';
    win.setSize(300, 280);
    win.setLocation(600,90)
    win.show(forms.teams_form);
}
