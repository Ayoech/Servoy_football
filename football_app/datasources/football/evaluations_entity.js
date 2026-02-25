
/**
 * Record validation method, will be called by databaseManager.validateRecord() and when databaseManager.saveData() is called.
 * Validate changes or state of the record.
 * All errors need toe be reported in the recordMarkers that is then returned by databaseManager.validateRecord() and is also placed
 * on the record itself (record.recordMarkers)
 *
 * @param {JSRecord<db:/football/evaluations>} record record that must be validated
 * @param {JSRecordMarkers} recordMarkers the object where all the problems can be reported against.
 * @param stateObject an object that a user can give to validateRecord for extra state (optional, can be null).
 *
 * @properties={typeid:24,uuid:"7CBCC2CD-4615-4B8A-9163-7FA2E03A63EA"}
 */
function onValidate(record, recordMarkers, stateObject) {
	// TODO Auto-generated method stub
	if (record.skill > 100) recordMarkers.report("skill must be less then 100", LOGGINGLEVEL.ERROR);
}
