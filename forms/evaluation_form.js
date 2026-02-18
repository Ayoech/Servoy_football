
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"074C9196-64CC-4DBC-9358-B25BB6FD1E7B"}
 */
function onClick(event) {
	// TODO Auto-generated method stub
	var rec = foundset.createRecord();
	var answer = plugins.dialogs.showQuestionDialog(
    'Confirm',
    'Do you want to save the changes?',
    'Yes',
    'No'
    );
	if(answer=='Yes') databaseManager.saveData();
}
