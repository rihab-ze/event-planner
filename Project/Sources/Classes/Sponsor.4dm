Class extends DataClass


exposed function selectedElement() : cs.SponsorEntity
	if (session.storage # null && session.storage.selectedSponsor # null)
		return this.get(session.storage.selectedSponsor.UUID)
	else 
		return this.all().first()
	end if 
	
exposed function saveSearch($search : text)
	use (session.storage)
		session.storage.sponsorName := new Shared Object("search"; $search)
	end use 
	
	
exposed function onloadSearch()->$search : text
	if (session.storage # null)
		$search := session.storage.sponsorName.search
	else 
		$search := ""
	end if 
	
exposed function setElement($sponsor : cs.SponsorEntity)
	use (session.storage)
		session.storage.selectedSponsor := new Shared Object("UUID"; $sponsor.UUID)
	end use 
	
exposed function searchWithCriteria($keyWord : variant) : cs.SponsorSelection
	var $searchClass: cs.Search
	$searchClass := cs.Search.new()
	var $entry: object
	$keyWord := ($keyWord # null) ? $keyWord : ""
	
	if ($keyWord # "")
		$entry := {dataclass: cs.Sponsor; searchField: []; orderByDefault: "kind"}
		
		$entry.searchField := []
		$entry.searchField.push({attribute: "kind"; tag: "kind"})
		$entry.searchField.push({path: "event.name"; placeHolder: "event"; tags: ["event"; "eventName"]; onlyWithTag: true})
		$entry.searchField.push({path: "company.name"; placeHolder: "company"; tags: ["company"; "companyName"]; onlyWithTag: true})
		
		return $searchClass.perform($entry; $keyWord)
	else 
		return this.all()
	end if 
