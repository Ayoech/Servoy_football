/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0181345A-6CD7-40D7-B1B7-A122B8536B62"}
 */
var searchText = null;

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"249F55EC-2747-49A8-A084-230806A8DE34"}
 */
function onClick(event) {
	// TODO Auto-generated method stub
	foundset.revertEditedRecords();
	foundset.newRecord();
	var win = application.createWindow('myWin', JSWindow.MODAL_DIALOG);
	win.title = 'Add Evaluation';
	win.setSize(380, 280);
	win.setLocation(500, 60)
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
 * @properties={typeid:24,uuid:"6AD35E0C-D49D-4E15-B553-CD9ED81473F9"}
 */
function onTrashIconClick(foundsetindex, columnindex, record, event, dataTarget) {
	// TODO Auto-generated method stub
	if (columnindex == 4) {
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
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1943C215-0B04-4EA1-A88E-536D0BE67010"}
 * @AllowToRunInFind
 */
function onAction(event) {
	// TODO Auto-generated method stub
	application.output('searching for: ' + searchText);
	if (searchText && foundset.find()) {
		foundset.evaluation_player.name = '%' + searchText + '%';
		foundset.search();

	} else {
		foundset.loadAllRecords();
	}
}

/**
 * Called when cell editing stopped.
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param [oldvalue]
 * @param [newvalue]
 * @param {JSEvent} [event]
 * @param {JSRecord} [record]
 *
 * @properties={typeid:24,uuid:"72A0760D-56AF-49D9-80CC-DA341797C65C"}
 */
function onCellEditingStopped(foundsetindex, columnindex, oldvalue, newvalue, event, record) {
	// TODO Auto-generated method stub
	application.output(newvalue);
	if (newvalue > 100) {
		plugins.dialogs.showErrorDialog('Validation error', 'Skill cannot be greater than 100', 'OK');
		foundset.revertEditedRecords();
	}

}
