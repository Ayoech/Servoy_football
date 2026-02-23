



/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8213138E-5090-4D6E-8542-53241CEEC2F7"}
 */
function onAction1(event) {
	// TODO Auto-generated method stub
	var win = application.createWindow('myWin', JSWindow.MODAL_DIALOG);
    win.title = 'Add Season';
    win.setSize(300, 220);
    win.setLocation(600,90);
    //var rec = databaseManager.getFoundSet('db:/football_app/seasons');
    //rec.createRecord();
    win.show(forms.seasons_form);
    
}



 /**
 * @param foundsetindex
 * @param columnindex
 * @param record
 * @param event
 * @param columnId
 * @override
 *
 * @properties={typeid:24,uuid:"F1DA471D-C190-444B-9A64-3CBF7E9BC125"}
 */
function onCellClick(foundsetindex, columnindex, record, event, columnId) {

	// TODO Auto-generated method stub

	if (columnindex == 2) {
		var answer = scopes.dialog.deleteRecord();
		if (answer) {
			foundset.deleteRecord();
			databaseManager.saveData();
		}
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
 * @properties={typeid:24,uuid:"57ED592A-71BF-4B2A-B55A-85EEABF5C604"}
 */
function onCellEditingStopped(foundsetindex, columnindex, oldvalue, newvalue, event, record) {
	// TODO Auto-generated method stub

	const year = new Date().getFullYear();
	if(!parseInt(newvalue.displayValue) || newvalue.displayValue < 0){
		plugins.dialogs.showErrorDialog('Validation error', 'Value must be a non-negative number', 'OK');
		foundset.revertEditedRecords();
	}
	else if(newvalue.realValue > year){
		plugins.dialogs.showErrorDialog('Validation error', 'Year cannot be greater than current year', 'OK');
		foundset.getRecord(foundsetindex).year = oldvalue;
		application.output('reverted value: '+ foundset.getRecord(foundsetindex).year);
	
	}
	
	

}
 