Class extends DataClass


exposed Function getCurrentUser()->$employee : cs:C1710.EmployeeEntity
	$employee:=This:C1470.get(Session:C1714.storage.payload.ID)
	
exposed Function saveSearch($search : Variant)
	Use (Session:C1714.storage)
		Session:C1714.storage.search:=New shared object:C1526("searchEmployee"; $search)
	End use 
	
exposed Function search($search : Variant) : cs:C1710.EmployeeSelection
	var $entry : Object
	var $searchClass : cs:C1710.Search
	$search:=($search#Null:C1517) ? $search : ""
	If ($search#"")
		$searchClass:=cs:C1710.Search.new()
		$entry:={dataclass: cs:C1710.Employee; searchField: []; orderByDefault: "fullName"}
		
		$entry.searchField:=[]
		$entry.searchField.push({attribute: "fullName"; tag: "fullName"})
		$entry.searchField.push({attribute: "mail"; tag: "mail"})
		$entry.searchField.push({attribute: "role"; tag: "role"})
		$entry.searchField.push({path: "company.name"; placeHolder: "company"; tag: "company"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "technicians.session.event.name"; placeHolder: "event"; tags: ["event"; "eventName"]; onlyWithTag: True:C214})
		$entry.searchField.push({path: "speakers.session.event.name"; placeHolder: "event"; tags: ["event"; "eventName"]; onlyWithTag: True:C214})
		$entry.searchField.push({path: "attendees.session.event.name"; placeHolder: "event"; tags: ["event"; "eventName"]; onlyWithTag: True:C214})
		
		return $searchClass.perform($entry; $search)
	Else 
		return This:C1470.all()
	End if 
	
exposed Function onloadSearch()->$search : Text
	If (Session:C1714.storage#Null:C1517 && Session:C1714.storage.search.searchEmployee#Null:C1517)
		$search:=Session:C1714.storage.search.searchEmployee
	Else 
		$search:=""
	End if 
	
	
exposed Function selectedElement() : cs:C1710.EmployeeEntity
	If (Session:C1714.storage#Null:C1517 && Session:C1714.storage.selectedEmployee.UUID#Null:C1517)
		return This:C1470.get(Session:C1714.storage.selectedEmployee.UUID)
	Else 
		return This:C1470.all().first()
	End if 
	
exposed Function setElement($employee : cs:C1710.EmployeeEntity)
	Use (Session:C1714.storage)
		Session:C1714.storage.selectedEmployee:=New shared object:C1526("UUID"; $employee.UUID)
	End use 
	
	