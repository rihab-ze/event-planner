Class extends DataClass


exposed function saveSearch($search : variant)
	use (session.storage)
		session.storage.searchStand := new Shared Object("search"; $search)
	end use 
	
	
exposed function onloadSearch()->$search : text
	if (session.storage.searchStand # null)
		$search := session.storage.searchStand.search
	else 
		$search := ""
	end if 
	
exposed function selectedElement() : cs.StandEntity
	if (session.storage # null && session.storage.selectedStand # null)
		return this.get(session.storage.selectedStand.UUID)
	else 
		return this.all().first()
	end if 
	
exposed function setElement($stand : cs.StandEntity)
	use (session.storage)
		session.storage.selectedStand := new Shared Object("UUID"; $stand.UUID)
	end use 
	
	
exposed function searchWithCriteria($keyWord : variant) : cs.StandSelection
	var $searchClass: cs.Search
	$searchClass := cs.Search.new()
	var $entry: object
	
	$keyWord := ($keyWord # null) ? $keyWord : ""
	if ($keyWord # "")
		$entry := {dataclass: cs.Stand; searchField: []; orderByDefault: "size"}
		$entry.searchField := []
		$entry.searchField.push({attribute: "size"; tag: "size"})
		$entry.searchField.push({attribute: "floor"; tag: "floor"})
		$entry.searchField.push({path: "event.name"; placeHolder: "event"; tags: ["event"; "eventName"]; onlyWithTag: true}) 
		$entry.searchField.push({path: "company.name"; placeHolder: "exposant"; tags: ["exposant"; "exposantName"; "company"]; onlyWithTag: true})  
		
		return $searchClass.perform($entry; $keyWord)
	else 
		return this.all()
	end if