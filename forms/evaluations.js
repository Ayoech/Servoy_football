/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DED36204-9C32-4619-87B2-E52094456185"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var rec = foundset.getRecord(foundset.newRecord());

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
 * @properties={typeid:24,uuid:"DC806171-AD31-42A6-BEBC-111CD90D83D4"}
 */
function onCellClick(foundsetindex, columnindex, record, event, columnid) {
	// TODO Auto-generated method stub
	if(columnid=='id4'){
		var answer = plugins.dialogs.showQuestionDialog(
	    'Confirm delete',
	    'Delete selected record?',
	    'Delete',
	    'Cancel'
	  );}
	

	  if (answer == 'Delete') {
	    foundset.deleteRecord();
	    databaseManager.saveData();
	  }


}

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
function onCellClick1(foundsetindex, columnindex, record, event, dataTarget) {
	// TODO Auto-generated method stub
	if(columnindex==4){
		var answer = plugins.dialogs.showQuestionDialog(
	    'Confirm delete',
	    'Delete selected record?',
	    'Delete',
	    'Cancel'
	  );}
	  else{
		  var playerRec = foundset.getSelectedRecord();
		    if (!playerRec) return;

		    // pass evaluations foundset to the container form
		    forms.evaluation_table.loadEvaluations(
		        playerRec.players_to_evaluations
		   );
	  }
	

	  if (answer == 'Delete') {
	    foundset.deleteRecord();
	    databaseManager.saveData();
	  }

}
