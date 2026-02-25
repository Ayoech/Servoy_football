
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"405FF0C6-C951-482D-B6EC-F0976229B883"}
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
