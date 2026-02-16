
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"35BFE733-7546-4F65-9050-28339DEEB56F"}
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
 * @properties={typeid:24,uuid:"35927E76-5885-47AA-9C83-9DF98FEBB1C1"}
 * @AllowToRunInFind
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

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"09516097-56D6-41E0-A9E1-05572EA47ADE"}
 */
function onAction1(event) {
	// TODO Auto-generated method stub
	var win = application.createWindow('myWin', JSWindow.MODAL_DIALOG);
    win.title = 'Add Player';
    win.setSize(300, 260);
    win.setLocation(520,80)
    win.show(forms.player_form);

}
