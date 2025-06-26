Class extends Entity


function checkParams() : boolean
	var $status: boolean
	if (ds.requiredField(this.size; "size"))
		$status := true
	end if 
	if (ds.requiredField(this.price; "price"))
		$status := true
	end if 
	if (ds.requiredField(this.company.name; "company"))
		$status := true
	end if 
	if (ds.requiredField(this.event.name; "event"))
		$status := true
	end if 
	if (ds.requiredField(this.floor; "kind"))
		$status := true
	end if 
	return $status
	
exposed function edit() : cs.StandEntity
	var $isNotValid: boolean
	var $saved: object
	$isNotValid := this.checkParams()
	if ($isNotValid)
		web Form.setError("Fill the required fields!")
		return this
	else 
		$saved := this.save()
		if ($saved.success)
			web Form.setMessage("This Stand was updated successfully!")
		else 
			web Form.setError("Something went wrong!")
		end if 
		return this
	end if 
	
	
function switchDisplayModal($toHideRef : text; $cssClass : text; $selectionLength : variant; $toShowRef : text)
	if ($selectionLength = 1)
		ds.switchDisplay($toHideRef; $cssClass; $selectionLength; $toShowRef)
	end if 
	web Form.setMessage("Stand added successfully !")
	ds.setCss("eventDialog"; "visibility")
	
exposed function addStandCompany($company : cs.CompanyEntity) : cs.StandEntity
	var $saved: object
	this.company := $company
	if (this.checkParams())
		web Form.setError("Fill the required fields!")
		return this
	else 
		$saved := this.save()
		if ($saved.success)
			if ($company.stands.length = 1)
				ds.switchDisplay("standTable"; "visibility"; $company.stands.length; "noStands")
			end if 
			web Form.setMessage("Stand added successfully")
			web Form["addStand"].hide()
		else 
			web Form.setError("Error while linking this Stand")
		end if 
	end if 
	
exposed function addStand($company : cs.CompanyEntity) : cs.StandEntity
	var $saved: object
	this.company := $company
	$saved := this.save()
	if ($saved.success)
		web Form.setMessage("Stand added successfully")
	else 
		web Form.setError("Error while adding this Stand")
	end if 
	
	
exposed function addStandEvent($event : cs.EventEntity) : cs.StandEntity
	var $saved: object
	this.event := $event
	if (this.checkParams())
		web Form.setError("Fill the required fields!")
		return this
	else 
		$saved := this.save()
		if ($saved.success)
			if ($event.stands.length = 1)
				ds.switchDisplay("stands"; "visibility"; $event.stands.length; "noStands")
			end if 
			web Form.setMessage("Stand added successfully")
			web Form["addStandModal"].hide()
		else 
			web Form.setError("Error while linking this Stand")
		end if 
	end if 	
	
	
exposed function saveEntity()
	var $result: object := this.save()
	if ($result.success)
		web Form.setMessage("Success")
		web Form["New"].hide()
	else 
		web Form.setError("Error")
	end if