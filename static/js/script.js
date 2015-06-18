/*
	Scrolling function to enable navbar change
*/
var $window = $(window);
$window.scroll(function() {
	if ($(this).scrollTop() > 130){
		$("#navbar").addClass("after-scroll");
	}
	else{
		$("#navbar").removeClass("after-scroll");
	}
});

/*
	Tooltips
*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

/*
	Pie chart for player breakdown by race
*/
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChartRaces);
google.setOnLoadCallback(drawChartProfs);

function drawChartRaces() {
	var data = google.visualization.arrayToDataTable([
	  ['Race', 'Player percentage'],
	  ['Asura', 16],
	  ['Sylvari', 15],
	  ['Human', 36],
	  ['Norn', 19],
	  ['Charr', 13]
	]);

	var options = {
	  title: 'Player breakdown by race (percentage)',
	  is3D: true,
	  colors: ['#A5A5A5', '#AB8585', '#AC4F4F', '#A83333', '#A40000'],
	  backgroundColor: "transparent",

	  chartArea:{left:0,width:"100%",height:"85%"}
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
	chart.draw(data, options);
}

/*
	Column chart for player breakdown by profession
*/
function drawChartProfs() {
	var data = google.visualization.arrayToDataTable([
	  ["Profession", "Percentage", { role: "style" } ],
	  ["Mesmer", 10, "color: #A5A5A5"],
	  ["Engineer", 10, "color: #AB8585"],
	  ["Necromancer", 12, "color: #AC4F4F"],
	  ["Guardian", 12, "color: #A83333"],
	  ["Thief", 13, "color: #A40000"],
	  ["Elementalist", 13, "color: #A83333"],
	  ["Ranger", 14, "color: #AC4F4F"],
	  ["Warrior", 16, "color: #AB8585"],
	]);

	var view = new google.visualization.DataView(data);


	var options = {
	  title: "Player breakdown by profession (percentage)",
	  bar: {groupWidth: "60%"},
	  legend: { position: "none" },
	  backgroundColor: "transparent",
	  chartArea:{left:0,width:"100%",height:"80%"}
	};
	
	var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
	chart.draw(view, options);
}

/*
	Functions to enable and disable race explanations
*/
function showAsura() {
	document.getElementById('race-id').style.display="block";
	document.getElementById('asura-id').style.display="block";
	document.getElementById('sylvari-id').style.display="none";
	document.getElementById('human-id').style.display="none";
	document.getElementById('norn-id').style.display="none";
	document.getElementById('charr-id').style.display="none";
}

function showSylvari() {
	document.getElementById('race-id').style.display="block";
	document.getElementById('asura-id').style.display="none";
	document.getElementById('sylvari-id').style.display="block";
	document.getElementById('human-id').style.display="none";
	document.getElementById('norn-id').style.display="none";
	document.getElementById('charr-id').style.display="none";
}

function showHuman() {
	document.getElementById('race-id').style.display="block";
	document.getElementById('asura-id').style.display="none";
	document.getElementById('sylvari-id').style.display="none";
	document.getElementById('human-id').style.display="block";
	document.getElementById('norn-id').style.display="none";
	document.getElementById('charr-id').style.display="none";
}

function showNorn() {
	document.getElementById('race-id').style.display="block";
	document.getElementById('asura-id').style.display="none";
	document.getElementById('sylvari-id').style.display="none";
	document.getElementById('human-id').style.display="none";
	document.getElementById('norn-id').style.display="block";
	document.getElementById('charr-id').style.display="none";
}

function showCharr() {
	document.getElementById('race-id').style.display="block";
	document.getElementById('asura-id').style.display="none";
	document.getElementById('sylvari-id').style.display="none";
	document.getElementById('human-id').style.display="none";
	document.getElementById('norn-id').style.display="none";
	document.getElementById('charr-id').style.display="block";
}