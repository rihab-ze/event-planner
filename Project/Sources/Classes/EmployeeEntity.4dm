Class extends Entity

exposed Alias myEvents inscriptions.event

exposed Function get fullName()->$fullName : Text
	$fullName:=(This:C1470.firstName && This:C1470.lastName) ? (This:C1470.firstName+" "+Uppercase:C13(This:C1470.lastName)) : (Uppercase:C13(This:C1470.lastName) || This:C1470.firstName) || ""
	
Function checkParams() : Boolean
	var $status : Boolean
	If (ds:C1482.requiredField(This:C1470.company; "company"))
		$status:=True:C214
	End if 
	If (ds:C1482.requiredField(This:C1470.address.first; "first"))
		$status:=True:C214
	End if 
	If (ds:C1482.requiredField(This:C1470.address.second; "second"))
		$status:=True:C214
	End if 
	If (ds:C1482.requiredField(This:C1470.address.state; "state"))
		$status:=True:C214
	End if 
	If (ds:C1482.requiredField(This:C1470.address.city; "city"))
		$status:=True:C214
	End if 
	If (ds:C1482.requiredField(This:C1470.address.zipCode; "zipCode"))
		$status:=True:C214
	End if 
	return $status
	
	
exposed Function update($address1 : Text; $address2 : Text; $city : Text; $zipCode : Integer; $state : Text)
	var $saved : Object
	var $status : Boolean:=False:C215
	This:C1470.address:=New object:C1471("first"; $address1; "second"; $address2; "city"; $city; "zipCode"; $zipCode; "state"; $state)
	$status:=This:C1470.checkParams()
	If (Not:C34($status))
		Web Form:C1735.setError("Fill the required fields!")
	Else 
		$saved:=This:C1470.save()
		If ($saved.success)
			Web Form:C1735.setMessage("This employee was successfully updated")
		Else 
			Web Form:C1735.setError("Something went wrong")
		End if 
	End if 
	
	
exposed Function setCompany($selectedCompany : cs:C1710.CompanyEntity)
	var $saved : Object
	var $status : Boolean
	If (This:C1470=Null:C1517)
		Web Form:C1735.setError("Select an employee first!")
	Else 
		This:C1470.company:=$selectedCompany
		$saved:=This:C1470.save()
		If ($saved.success)
			If ($selectedCompany.employees.length=1)
				ds:C1482.switchDisplay("employeeMatrix"; "visibility"; $selectedCompany.employees.length; "noEmployee")
			End if 
			Web Form:C1735.setMessage("Employee added successfully to the selected event!")
			Web Form:C1735["addEmployee"].hide()
		Else 
			Web Form:C1735.setError("Error while linking this Event Actor")
		End if 
	End if 
	
	
exposed Function employeeEvents()->$col : Collection
	var $events : cs:C1710.EventSelection
	var $event : cs:C1710.EventEntity
	var $item : Object
	$col:=New collection:C1472()
	$events:=This:C1470.attendees.session.event
	$events:=$events.or(This:C1470.speakers.session.event)
	$events:=$events.or(This:C1470.eventActors.event)
	$events:=$events.or(This:C1470.technicians.session.event)
	For each ($event; $events)
		$item:=$event.toObject("UUID,name,country")
		$item.isTechnician:=This:C1470.technicians.session.event.contains($event) ? "Technician" : ""
		$item.isSpeaker:=This:C1470.speakers.session.event.contains($event) ? "Speaker" : ""
		$item.isEventActor:=This:C1470.eventActors.event.contains($event) ? "EventActor" : ""
		$item.isAttendee:=This:C1470.attendees.session.event.contains($event) ? "Attendee" : ""
		$col.push($item)
	End for each 
	
	
exposed Function employeeEventsSelection() : cs:C1710.EventSelection
	return This:C1470.attendees.session.event.or(This:C1470.speakers.session.event).or(This:C1470.eventActors.event).or(This:C1470.technicians.session.event)
	
exposed Function reloadUser()
	This:C1470.reload()