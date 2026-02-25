/**
 * @properties={typeid:24,uuid:"C6C6E3A1-57FC-4FFC-A6FC-D2EC25962D9C"}
 */
function deleteRecord() {
	application.output('delete scope function called');
	var answer = plugins.dialogs.showQuestionDialog('Confirm delete',
		'Delete selected record?',
		'Delete',
		'Cancel');
	if (answer == 'Delete') {
		return true;
	} else {
		return false;
	}
}
