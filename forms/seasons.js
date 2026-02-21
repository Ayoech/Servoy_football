
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B7699200-DA01-4175-98A4-26B16FCB3FCB"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var rec = foundset.createRecord();

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
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or when the ENTER key is used (then only the selected foundset index is given).
 * Use the record to exactly match what the user clicked on.
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 * @param {String} [columnid]
 *
 * @properties={typeid:24,uuid:"7DF7217B-0D7F-442A-860F-91044A027CCF"}
 */


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
 * @properties={typeid:24,uuid:"29FEB853-0E04-4047-AEBF-0527BDE4E892"}
 */

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
		if(columnindex == 2){
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


 