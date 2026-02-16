/**
 * @properties={typeid:24,uuid:"C1485918-A531-4923-AA44-68F67A11FC62"}
 *  @param {JSRecord} playerRecord
 *  @param {JSFoundSet} evalFS
 */
 function loadEvaluations(evalFS) {

	    if (!evalFS) return;

	    // 1. Set table foundset
	    controller.loadRecords(evalFS);

	    // 2. Update chart
	    updateSkillChart(evalFS);
	}
/**
 * TODO generated, please specify type and doc for the params
 * @param playerRecord
 *
 * @properties={typeid:24,uuid:"0830A7EA-66FB-488F-A37C-D57578DF7F3F"}
 */
function updateSkillChart(playerRecord) {
	
	// TODO Auto-generated method stub


	    var evalFS = playerRecord.evaluation_player;

	    if (!evalFS || evalFS.getSize() === 0) {
	        elements.chart_4.setData({ labels: [], datasets: [], options: { plugins: { title: { display: true, text: 'Player evolution' } } } });
	        return;
	    }

	    var labels = [];
	    var values = [];

	    for (var i = 1; i <= evalFS.getSize(); i++) {
	        var rec = evalFS.getRecord(i);

	        // season year (via relation)
	        var year = rec.evaluations_to_seasons.year;

	        labels.push(year);
	        values.push(rec.skill);
	    }

	    elements.chart_4.setData({
	        labels: labels,
	        datasets: [{
	            label: 'Player evolution',
	            data: values,
	            fill: false,
	            tension: 0.2
	        }],
	        options: {
	            responsive: true,
	            plugins: {
	                title: {
	                    display: true,
	                    text: 'Player evolution'
	                },
	                legend: { display: false }
	            }
	        }
	    });
	}