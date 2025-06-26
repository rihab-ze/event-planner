Class extends DataClass


exposed function $search($search : variant) : cs.SessionSelection
	var $entry: object
	var $searchClass: cs.Search
	$search := ($search # null) ? $search : ""
	if ($search # "")
		$searchClass := cs.Search.new()
		$entry := {dataclass: cs.Session; searchField: []; orderByDefault: "name"}
		
		$entry.searchField := []
		$entry.searchField.push({attribute: "name"; tag: "name"})
		$entry.searchField.push({attribute: "subject"; tag: "subject"; tags: ["subject"; "sessionSubject"]; onlyWithTag: true})
		$entry.searchField.push({path: "event.name"; placeHolder: "event"; tag: "event"; onlyWithTag: true})
		$entry.searchField.push({path: "room.name"; placeHolder: "room"; tag: "room"; onlyWithTag: true})
		$entry.searchField.push({path: "speakers.employee.fullName"; placeHolder: "speaker"; tag: "speaker"; onlyWithTag: true})
		$entry.searchField.push({path: "technicians.employee.fullName"; placeHolder: "technician"; tag: "technician"; onlyWithTag: true})
		return $searchClass.perform($entry; $search)
	else 
		return this.all()
	end if 
	
exposed function onloadSearch()->$search : text
	if (session.storage.searchSession # null)
		$search := session.storage.searchSession.search
	else 
		$search := ""
	end if 
	
exposed function saveSearch($search : variant)
	use (session.storage)
		session.storage.searchSession := new Shared Object("search"; $search)
	end use 
	
exposed function selectedElement() : cs.SessionEntity
	if (session.storage # null && session.storage.selectedSession.UUID # null)
		return this.get(session.storage.selectedSession.UUID)
	else 
		return this.all().first()
	end if 
	
exposed function setElement($selSession : cs.SessionEntity)
	use (session.storage)
		session.storage.selectedSession := new Shared Object("UUID"; $selSession.UUID)
	end use 
	
	
exposed function fillPieChart() : collection
	var $pieChart: collection := new Collection()
	$pieChart := this.all().extract("type.name"; "type"; "type.sessions.length"; "occurence")
	return $pieChart
	
	
exposed function getFirstsession()
	use (session.storage)
		return this.get(session.storage.firstSession.UUID)
	end use 
