/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DED36204-9C32-4619-87B2-E52094456185"}
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
 * @properties={typeid:24,uuid:"DC806171-AD31-42A6-BEBC-111CD90D83D4"}
 */

/**
 * Handle changed data for the search textbox.
 * @param {String} oldValue
 * @param {String} newValue
 * @param {JSEvent} event
 * @return {Boolean}
 * @properties={typeid:24,uuid:"F1A2B3C4-5D6E-7F80-1234-9ABCDEFFEDCB"}
 * @AllowToRunInFind
 */

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"249F55EC-2747-49A8-A084-230806A8DE34"}
 */
function onClick(event) {
	// TODO Auto-generated method stub
	var win = application.createWindow('myWin', JSWindow.MODAL_DIALOG);
    win.title = 'Add Evaluation';
    win.setSize(380, 280);
    win.setLocation(500,60)
    win.show(forms.evaluation_form);

}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * The foundsetindex is always -1 when there are grouped rows.
 * If you use enabled=false on a column, make sure to test in the handler for columnindex so you only execute the code for that column IF the columnindex is for that column.
 *
 * @param {Number} foundsetindex
 * @param {Number} columnindex
 * @param {JSRecord} record
 * @param {JSEvent} [event]
 * @param {String} [dataTarget]
 *
 * @properties={typeid:24,uuid:"DD1D5CC5-7E5B-4B4F-86B3-B30453BBA6CC"}
 */


/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * The foundsetindex is always -1 when there are grouped rows.
 * If you use enabled=false on a column, make sure to test in the handler for columnindex so you only execute the code for that column IF the columnindex is for that column.
 *
 * @param {Number} foundsetindex
 * @param {Number} columnindex
 * @param {JSRecord} record
 * @param {JSEvent} [event]
 * @param {String} [dataTarget]
 *
 * @properties={typeid:24,uuid:"E50EC65C-BD53-4A3D-99DB-5BC0D7F13A59"}
 */
function onTrashClick(foundsetindex, columnindex, record, event, dataTarget, columnId) {
	// TODO Auto-generated method stub
	application.output(columnId);

}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * The foundsetindex is always -1 when there are grouped rows.
 * If you use enabled=false on a column, make sure to test in the handler for columnindex so you only execute the code for that column IF the columnindex is for that column.
 *
 * @param {Number} foundsetindex
 * @param {Number} columnindex
 * @param {JSRecord} record
 * @param {JSEvent} [event]
 * @param {String} [dataTarget]
 *
 * @properties={typeid:24,uuid:"9B59D070-8BBB-48C2-BEA6-2A9F722969CF"}
 */


/**
 * @param foundsetindex
 * @param columnindex
 * @param record
 * @param event
 * @param columnId
 * @override
 *
 * @properties={typeid:24,uuid:"84F5C5CF-8276-459B-B926-CB51D970403D"}
 */
function onCellClick(foundsetindex, columnindex, record, event, columnId) {
	return _super.onCellClick(foundsetindex, columnindex, record, event, columnId)
}

/**
 * @properties={typeid:24,uuid:"8F635E7E-23D5-48BE-AC7A-F733FAF5C73A"}
 */
function onDelete() {
	// TODO Auto-generated method stub
}
