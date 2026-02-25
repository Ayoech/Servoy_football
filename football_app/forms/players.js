


/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"09516097-56D6-41E0-A9E1-05572EA47ADE"}
 */
function onAction1(event) {
	// TODO Auto-generated method stub
	foundset.revertEditedRecords();
	foundset.createRecord();
	application.output('add player');
	var win = application.createWindow('myWin', JSWindow.MODAL_DIALOG);
    win.title = 'Add Player';
    win.setSize(300, 260);
    win.setLocation(520,80)
    win.show(forms.player_form);

}

