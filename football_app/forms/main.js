
/**
 * @param menuItem
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"D50E071F-4050-4340-9D5A-DEA6B97240F5"}
 */
function onMenuItemSelected(menuItem, event) {
	// TODO Auto-generated method stub
   switch (menuItem) {
   case 'players':
        elements.fc_content.containedForm = forms.players;
        break;
   case 'teams':
   		elements.fc_content.containedForm = forms.teams;
   		break;
   case 'eval':
	    elements.fc_content.containedForm = forms.evaluations;
	    break;
   case 'seasons' :
	   elements.fc_content.containedForm = forms.seasons;
	   break;

    default:
        elements.fc_content.containedForm = forms.teams;  // Default to homeForm
}
}
