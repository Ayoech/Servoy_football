
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"267D490A-C50E-412D-81DF-39BBAFE49743"}
 */
function onClickSave(event) {
	// TODO Auto-generated method stub
	application.output('Saving data...');
	application.output(controller.getName());
	if(foundset.skill>100){
		application.output('Skill cannot be greater than 100');
		plugins.dialogs.showErrorDialog('Validation error', 'Skill cannot be greater than 100', 'OK');
		databaseManager.revertEditedRecords();
        return;
	}
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
 * @properties={typeid:24,uuid:"B6D42BB4-10CC-46AC-965A-D395019DEC30"}
 */
 

/**
 * @properties={typeid:24,uuid:"76C1C579-58F3-4F91-A826-4FE4A3C4065C"}
 */
function onCellClick(foundsetindex, columnindex, record, event, columnId) {
	if (columnId == 'trash') {
		application.output('Fired');
		var answer = plugins.dialogs.showQuestionDialog('Confirm delete',
			'Delete selected record?',
			'Delete',
			'Cancel');
		if (answer == 'Delete') {
			foundset.deleteRecord();
			databaseManager.saveData();
		}
	}
	// TODO Auto-generated method stub
}

