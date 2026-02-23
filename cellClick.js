/**
 * TODO generated, please specify type and doc for the params
 * @param foundsetindex
 * @param columnindex
 * @param record
 * @param event
 * @param columnId
 *
 * @properties={typeid:24,uuid:"9D4A7878-9713-4C1C-9C05-B2C1C06D3AA8"}
 */
function onCellClick(foundsetindex, columnindex, record, event, columnId) {
	if (columnId == 'trash') {
		application.output('Fired');
		var answer = scopes.dialog.deleteRecord();
		if (answer) {
			foundset.deleteRecord();
			databaseManager.saveData();
		}
	}
	
}