Class extends Entity


Function checkParams() : Boolean
	var $status : Boolean
	If (ds:C1482.requiredField(This:C1470.size; "size"))
		$status:=True:C214
	End if 
	If (ds:C1482.requiredField(This:C1470.price; "price"))
		$status:=True:C214
	End if 
	If (ds:C1482.requiredField(This:C1470.company.name; "company"))
		$status:=True:C214
	End if 
	If (ds:C1482.requiredField(This:C1470.event.name; "event"))
		$status:=True:C214
	End if 
	If (ds:C1482.requiredField(This:C1470.floor; "floor"))
		$status:=True:C214
	End if 
	return $status
	
exposed Function edit() : cs:C1710.StandEntity
	var $isNotValid : Boolean
	var $saved : Object
	$isNotValid:=This:C1470.checkParams()
	If ($isNotValid)
		Web Form:C1735.setError("Fill the required fields!")
		return This:C1470
	Else 
		$saved:=This:C1470.save()
		If ($saved.success)
			Web Form:C1735.setMessage("This Stand was updated successfully!")
		Else 
			Web Form:C1735.setError("Something went wrong!")
		End if 
		return This:C1470
	End if 
	
	
Function switchDisplayModal($toHideRef : Text; $cssClass : Text; $selectionLength : Variant; $toShowRef : Text)
	If ($selectionLength=1)
		ds:C1482.switchDisplay($toHideRef; $cssClass; $selectionLength; $toShowRef)
	End if 
	Web Form:C1735.setMessage("Stand added successfully !")
	ds:C1482.setCss("eventDialog"; "visibility")
	
exposed Function addStandCompany($company : cs:C1710.CompanyEntity) : cs:C1710.StandEntity
	var $saved : Object
	This:C1470.company:=$company
	If (This:C1470.checkParams())
		Web Form:C1735.setError("Fill the required fields!")
		return This:C1470
	Else 
		$saved:=This:C1470.save()
		If ($saved.success)
			If ($company.stands.length=1)
				ds:C1482.switchDisplay("standTable"; "visibility"; $company.stands.length; "noStands")
			End if 
			Web Form:C1735.setMessage("Stand added successfully")
			Web Form:C1735["addStand"].hide()
		Else 
			Web Form:C1735.setError("Error while linking this Stand")
		End if 
	End if 
	
exposed Function addStand($company : cs:C1710.CompanyEntity) : cs:C1710.StandEntity
	var $saved : Object
	This:C1470.company:=$company
	$saved:=This:C1470.save()
	If ($saved.success)
		Web Form:C1735.setMessage("Stand added successfully")
	Else 
		Web Form:C1735.setError("Error while adding this Stand")
	End if 
	
	
exposed Function addStandEvent($event : cs:C1710.EventEntity) : cs:C1710.StandEntity
	var $saved : Object
	This:C1470.event:=$event
	If (This:C1470.checkParams())
		Web Form:C1735.setError("Fill the required fields!")
		return This:C1470
	Else 
		$saved:=This:C1470.save()
		If ($saved.success)
			If ($event.stands.length=1)
				ds:C1482.switchDisplay("stands"; "visibility"; $event.stands.length; "noStands")
			End if 
			Web Form:C1735.setMessage("Stand added successfully")
			Web Form:C1735["addStandModal"].hide()
		Else 
			Web Form:C1735.setError("Error while linking this Stand")
		End if 
	End if 
	
	
exposed Function saveEntity()
	var $result : Object:=This:C1470.save()
	If ($result.success)
		Web Form:C1735.setMessage("Success")
		Web Form:C1735["New"].hide()
	Else 
		Web Form:C1735.setError("Error")
	End if 