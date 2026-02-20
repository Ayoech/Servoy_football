
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"35BFE733-7546-4F65-9050-28339DEEB56F"}
 */



/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or when the ENTER key is used (then only the selected foundset index is given).
 * Use the record to exactly match what the user clicked on.
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 * @param {String} [columnid]
 *
 * @properties={typeid:24,uuid:"35927E76-5885-47AA-9C83-9DF98FEBB1C1"}
 * @AllowToRunInFind
 */


/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"09516097-56D6-41E0-A9E1-05572EA47ADE"}
 */
function onAction1(event) {
	// TODO Auto-generated method stub
	application.output('add player');
	var win = application.createWindow('myWin', JSWindow.MODAL_DIALOG);
    win.title = 'Add Player';
    win.setSize(300, 260);
    win.setLocation(520,80)
    win.show(forms.player_form);

}

/**
 * @param {Number} columnindex
 * @param {String} sortdirection
 * @param {JSEvent} [event]
 * @param {String} [columnid]
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"AEF791BC-3FD2-4659-BAB1-721F601F3933"}
 */


/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or when the ENTER key is used (then only the selected foundset index is given).
 * Use the record to exactly match what the user clicked on.
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 * @param {String} [columnid]
 *
 * @properties={typeid:24,uuid:"AFB91E8D-4DB3-4DAD-AEC4-7BADEE727268"}
 */

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or when the ENTER key is used (then only the selected foundset index is given).
 * Use the record to exactly match what the user clicked on.
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 * @param {String} [columnid]
 *
 * @properties={typeid:24,uuid:"6A4C0BC4-71F0-4FFE-BE40-78C7E00A7DE6"}
 */

