/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"39CE916B-34E9-4F1A-873F-D7E2EB03AB31"}
 */
function onClickSave(event) {
	// TODO Auto-generated method stub
	application.output('Saving data...');
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
 * @properties={typeid:24,uuid:"26451D45-0BDB-4B2C-8E62-C8FA91D52EF8"}
 */
function onDelete(foundsetindex, columnindex, record, event, columnid) {
	// TODO Auto-generated method stub
	application.output('Deleting record...');
	//application.output(columnid);
	//application.output(columnindex);
	//application.output('record' + record+ ' foundsetindex' + foundsetindex);
	application.output(String(this).slice(10,17));
	if( String(this).slice(10,17).includes('seasons') && columnindex==2){
		application.output('right column selected..');
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