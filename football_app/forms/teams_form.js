
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A3280912-A951-4AD7-8039-E57F70E511C1"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var rec = foundset.getRecord(foundset.newRecord());
	var answer = plugins.dialogs.showQuestionDialog(
    'Confirm',
    'Do you want to save the changes?',
    'Yes',
    'No'
    );
	databaseManager.saveData();

}
