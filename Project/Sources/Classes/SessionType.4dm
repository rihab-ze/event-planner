Class extends DataClass

exposed function fillPieChart() : object
	var $data: collection
	$data := this.all().extract("name"; "name"; "sessions.length"; "occurence")
	var $pieChart: object := {}
	$pieChart.series := $data.extract("occurence")
	$pieChart.options := {labels: $data.extract("name")}
	return $pieChart
