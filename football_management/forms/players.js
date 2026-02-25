
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"87F7903E-D638-4573-A66F-C93A64BD75AA"}
 */
function onAction(event) {
	// TODO Auto-generated method stub

}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"77089490-13AC-46BD-B6E5-31D594978862"}
 */
function onClickBtn(event) {
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
	var count = foundset.getSelectedIndexes().length;

    if (count === 0) {
        plugins.dialogs.showInfoDialog('Info', 'No records selected');
        return;
    }

    var answer = plugins.dialogs.showQuestionDialog(
        'Confirm delete',
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
 * @param menuItem
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"E1DA3BF6-0564-4FBB-AF8F-64A7D9F75000"}
 */
function onMenuItemSelected(menuItem, event) {
	// TODO Auto-generated method stub
	if(menuItem=='player'){
		elements.sidenav_2.containedForm= forms.players_show;
	}
}
