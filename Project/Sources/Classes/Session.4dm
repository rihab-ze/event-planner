Class extends DataClass


exposed Function search($search : Variant) : cs:C1710.SessionSelection
	var $entry : Object
	var $searchClass : cs:C1710.Search
	$search:=($search#Null:C1517) ? $search : ""
	TRACE:C157
	If ($search#"")
		$searchClass:=cs:C1710.Search.new()
		$entry:={dataclass: cs:C1710.Session; searchField: []; orderByDefault: "name"}
		
		$entry.searchField:=[]
		$entry.searchField.push({attribute: "name"; tag: "name"})
		$entry.searchField.push({attribute: "subject"; tag: "subject"; tags: ["subject"; "sessionSubject"]; onlyWithTag: True:C214})
		$entry.searchField.push({path: "event.name"; placeHolder: "event"; tag: "event"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "room.name"; placeHolder: "room"; tag: "room"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "speakers.employee.fullName"; placeHolder: "speaker"; tag: "speaker"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "technicians.employee.fullName"; placeHolder: "technician"; tag: "technician"; onlyWithTag: True:C214})
		return $searchClass.perform($entry; $search)
	Else 
		return This:C1470.all()
	End if 
	
exposed Function onloadSearch()->$search : Text
	If (Session:C1714.storage.searchSession#Null:C1517)
		$search:=Session:C1714.storage.searchSession.search
	Else 
		$search:=""
	End if 
	
exposed Function saveSearch($search : Variant)
	Use (Session:C1714.storage)
		Session:C1714.storage.searchSession:=New shared object:C1526("search"; $search)
	End use 
	
exposed Function selectedElement() : cs:C1710.SessionEntity
	If (Session:C1714.storage#Null:C1517 && Session:C1714.storage.selectedSession.UUID#Null:C1517)
		return This:C1470.get(Session:C1714.storage.selectedSession.UUID)
	Else 
		return This:C1470.all().first()
	End if 
	
exposed Function setElement($selSession : cs:C1710.SessionEntity)
	Use (Session:C1714.storage)
		Session:C1714.storage.selectedSession:=New shared object:C1526("UUID"; $selSession.UUID)
	End use 
	
	
exposed Function fillPieChart() : Collection
	var $pieChart : Collection:=New collection:C1472()
	$pieChart:=This:C1470.all().extract("type.name"; "type"; "type.sessions.length"; "occurence")
	return $pieChart
	
	
exposed Function getFirstsession()
	Use (Session:C1714.storage)
		return This:C1470.get(Session:C1714.storage.firstSession.UUID)
	End use 
	