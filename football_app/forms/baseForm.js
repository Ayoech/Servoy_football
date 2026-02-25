
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
	if(controller.getName()=='evauation_form' && foundset.skill>100){
		application.output('Skill cannot be greater than 100');
		plugins.dialogs.showErrorDialog('Validation error', 'Skill cannot be greater than 100', 'OK');
		databaseManager.revertEditedRecords();
        return;
	}
	else if(controller.getName()=='teams_form' && foundset.rank>10){
		application.output('Rating cannot be greater than 10');
		plugins.dialogs.showErrorDialog('Validation error', 'Rating cannot be greater than 10', 'OK');
		databaseManager.revertEditedRecords();
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
 * TODO generated, please specify type and doc for the params
 * @param foundsetindex
 * @param columnindex
 * @param record
 * @param event
 * @param columnid
 *
 * @properties={typeid:24,uuid:"6ADE51C7-6793-42A2-8C9C-DB420BFCF19A"}
 */
function onCellClick(foundsetindex, columnindex, record, event, columnid) {
	// TODO Auto-generated method stub
	if(columnid == 'trash'){
		var answer = scopes.dialog.deleteRecord();
		if(answer){
			foundset.deleteRecord(record);
			databaseManager.saveData();
		}
	}

}

 



