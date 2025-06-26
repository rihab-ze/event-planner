Class extends DataClass

exposed Function saveSearch($search : Variant)
	Use (Session:C1714.storage)
		Session:C1714.storage.searchData:=New shared object:C1526("search"; $search)
	End use 
	
exposed Function $search($search : Variant; $eventSelection : Variant) : cs:C1710.EventSelection
	var $entry : Object
	var $searchTag : Text
	var $searchClass : cs:C1710.Search
	var $currentUser : cs:C1710.EmployeeEntity
	$currentUser:=ds:C1482.Employee.getCurrentUser()
	$search:=($search#Null:C1517) ? $search : ""
	If ($search#"")
		$searchClass:=cs:C1710.Search.new()
		$entry:={dataclass: cs:C1710.Event; searchField: []; orderByDefault: "name"}
		
		If ($eventSelection="mine")
			$searchTag:="actor:"+$currentUser.firstName+" or speaker:"+$currentUser.firstName+" or attendee:"+$currentUser.firstName+" or technician:"+$currentUser.firstName+")"
			$search:=$search+" ( "+$searchTag
		End if 
		$entry:={dataclass: cs:C1710.Event; searchField: []; orderByDefault: "name"}
		$entry.searchField:=[]
		$entry.searchField.push({attribute: "name"; tag: "name"})
		$entry.searchField.push({attribute: "location"; tag: "location"; tags: ["location"; "eventLocation"]; onlyWithTag: True:C214})
		$entry.searchField.push({attribute: "country"; tag: "country"; tags: ["country"; "eventCountry"]; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.name"; placeHolder: "session"; tag: "session"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "eventActors.employee.fullName"; placeHolder: "actor"; tag: "actor"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.speakers.employee.fullName"; placeHolder: "speaker"; tag: "speaker"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.technicians.employee.fullName"; placeHolder: "technician"; tag: "technician"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.attendees.employee.fullName"; placeHolder: "attendee"; tag: "attendee"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "stands.size"; placeHolder: "stand"; tags: ["stand"; "eventStand"]; onlyWithTag: True:C214})
		$entry.searchField.push({path: "stands.company.name"; placeHolder: "stand"; tags: ["stand"; "eventStand"; "standCompany"]; onlyWithTag: True:C214})
		return $searchClass.perform($entry; $search)
	Else 
		return This:C1470.all()
	End if 
	
exposed Function searchPublicEvents($search : Variant) : cs:C1710.EventSelection
	var $entry : Object
	var $searchTag : Text
	var $searchClass : cs:C1710.Search
	$search:=($search#Null:C1517) ? $search : ""
	If ($search#"")
		$searchClass:=cs:C1710.Search.new()
		$entry:={dataclass: cs:C1710.Event; searchField: []; orderByDefault: "name"}
		$entry.searchField:=[]
		$entry.searchField.push({attribute: "name"; tag: "name"})
		$entry.searchField.push({attribute: "location"; tag: "location"; tags: ["location"; "eventLocation"]; onlyWithTag: True:C214})
		$entry.searchField.push({attribute: "country"; tag: "country"; tags: ["country"; "eventCountry"]; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.name"; placeHolder: "session"; tag: "session"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "eventActors.employee.fullName"; placeHolder: "actor"; tag: "actor"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.speakers.employee.fullName"; placeHolder: "speaker"; tag: "speaker"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.technicians.employee.fullName"; placeHolder: "technician"; tag: "technician"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.attendees.employee.fullName"; placeHolder: "attendee"; tag: "attendee"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "stands.size"; placeHolder: "stand"; tags: ["stand"; "eventStand"]; onlyWithTag: True:C214})
		$entry.searchField.push({path: "stands.company.name"; placeHolder: "stand"; tags: ["stand"; "eventStand"; "standCompany"]; onlyWithTag: True:C214})
		return $searchClass.perform($entry; $search)
	Else 
		return This:C1470.all()
	End if 
	
exposed Function publicSearch($search : Variant) : cs:C1710.EventSelection
	var $entry : Object
	var $searchTag : Text
	var $searchClass : cs:C1710.Search
	var $currentUser : cs:C1710.EmployeeEntity
	$search:=($search#Null:C1517) ? $search : ""
	If ($search#"")
		$searchClass:=cs:C1710.Search.new()
		$entry:={dataclass: cs:C1710.Event; searchField: []; orderByDefault: "name"}
		$entry.searchField:=[]
		$entry.searchField.push({attribute: "name"; tag: "name"})
		$entry.searchField.push({attribute: "location"; tag: "location"; tags: ["location"; "eventLocation"]; onlyWithTag: True:C214})
		$entry.searchField.push({attribute: "country"; tag: "country"; tags: ["country"; "eventCountry"]; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.name"; placeHolder: "session"; tag: "session"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "eventActors.employee.fullName"; placeHolder: "actor"; tag: "actor"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.speakers.employee.fullName"; placeHolder: "speaker"; tag: "speaker"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.technicians.employee.fullName"; placeHolder: "technician"; tag: "technician"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sessions.attendees.employee.fullName"; placeHolder: "attendee"; tag: "attendee"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "stands.size"; placeHolder: "stand"; tags: ["stand"; "eventStand"]; onlyWithTag: True:C214})
		$entry.searchField.push({path: "stands.company.name"; placeHolder: "stand"; tags: ["stand"; "eventStand"; "standCompany"]; onlyWithTag: True:C214})
		return $searchClass.perform($entry; $search)
	Else 
		return This:C1470.all()
	End if 
	
exposed Function onloadSearch()->$search : Text
	If ((Session:C1714.storage.searchData#Null:C1517) && (Session:C1714.storage.searchData.search#Null:C1517))
		$search:=Session:C1714.storage.searchData.search
	Else 
		$search:=""
	End if 
	
exposed Function selectedElement() : cs:C1710.EventEntity
	If (Session:C1714.storage#Null:C1517 && Session:C1714.storage.selectedEvent#Null:C1517)
		return This:C1470.get(Session:C1714.storage.selectedEvent.UUID)
	Else 
		return This:C1470.all().first()
	End if 
	
exposed Function setElement($event : cs:C1710.EventEntity)
	Use (Session:C1714.storage)
		Session:C1714.storage.selectedEvent:=New shared object:C1526("UUID"; $event.UUID)
	End use 
	
exposed Function fillBarChart() : Object
	var $barChart : Object:={}
	var $events : cs:C1710.EventSelection:=This:C1470.all()
	var $event : cs:C1710.EventEntity
	$barChart.options:={xaxis: {categories: []}}
	$barChart.series:=[{name: "Inscription"; $data: []}; {name: "Sponsors"; $data: []}; {name: "Stands"; $data: []}; {name: "Sessions"; $data: []}]
	For each ($event; $events)
		$barChart.options.xaxis.categories.push($event.name)
		$barChart.series[0].data.push($event.inscriptions.length)
		$barChart.series[1].data.push($event.sponsors.length)
		$barChart.series[2].data.push($event.stands.length)
		$barChart.series[3].data.push($event.sessions.length)
	End for each 
	return $barChart
	
exposed Function fillBubbleChart() : Object
	var $bubbleChart : Object:={}
	var $data : Object
	var $events : cs:C1710.EventSelection:=This:C1470.all()
	var $event : cs:C1710.EventEntity
	$bubbleChart.series:=[]
	$bubbleChart.options:={}
	For each ($event; $events)
		$data:={name: $event.name; $data: [{x: $event.sessions.length; y: $event.sponsors.length; z: $event.inscriptions.length}]}
		$bubbleChart.series.push($data)
	End for each 
	return $bubbleChart