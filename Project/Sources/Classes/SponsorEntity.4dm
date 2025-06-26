Class extends Entity


function checkParams($contact : variant) : boolean
	this.moreInfo := new Object("contact"; $contact)
	var $status: boolean
	if (ds.requiredField(this.kind; "kind"))
		$status := true
	end if 
	if (ds.requiredField(this.event; "sponsorEvent"))
		$status := true
	end if 
	if (ds.requiredField(this.company; "sponsorCompany"))
		$status := true
	end if 
	if (ds.requiredField(this.price; "price"))
		$status := true
	end if 
	if (ds.requiredField(this.moreInfo.contact; "contact"))
		$status := true
	end if 
	return $status
	
exposed function edit($contact : variant) : cs.SponsorEntity
	var $isNotValid: boolean
	var $saved: object
	$isNotValid := this.checkParams($contact)
	if ($isNotValid)
		web Form.setError("Fill the required fields!")
		return this
	else 
		$saved := this.save()
		if ($saved.success)
			web Form.setMessage("This sponsor was updated successfully!")
		else 
			web Form.setError("Something went wrong!")
		end if 
		return this
	end if 
	
	
function switchDisplayModal($toHideRef : text; $cssClass : text; $selectionLength : variant; $toShowRef : text)
	if ($selectionLength = 1)
		ds.switchDisplay($toHideRef; $cssClass; $selectionLength; $toShowRef)
	end if 
	web Form.setMessage("Sponsor added successfully !")
	ds.setCss("eventDialog"; "visibility")
	
exposed function addSponsorCompany($company : cs.CompanyEntity; $contact : variant) : cs.SponsorEntity
	var $isNotValid: boolean
	var $saved: object
	this.company := $company
	$isNotValid := this.checkParams($contact)
	if ($isNotValid)
		web Form.setError("Fill the required fields!")
		return this
	else 
		this.moreInfo := new Object("contact"; $contact)
		$saved := this.save()
		if ($saved.success)
			if ($company.sponsors.length = 1)
				ds.switchDisplay("sponsorTable"; "visibility"; $company.sponsors.length; "noSponsors")
			end if 
			web Form.setMessage("Sponsor added successfully")
			web Form["addSponsor"].hide()
		else 
			web Form.setError("something went wrong")
		end if 
	end if 
	
exposed function addSponsorEvent($event : cs.EventEntity; $contact : variant) : cs.SponsorEntity
	var $saved: object
	this.event := $event
	if (this.checkParams($contact))
		web Form.setError("Fill the required fields!")
		return this
	else 
		this.moreInfo := new Object("contact"; $contact)
		$saved := this.save()
		if ($saved.success)
			if ($event.sponsors.length = 1)
				ds.switchDisplay("sponsors"; "visibility"; $event.sponsors.length; "noSponsors")
			end if 
			web Form.setMessage("Sponsor added successfully")
			web Form["addSponsor"].hide()
		else 
			web Form.setError("something went wrong")
		end if 
	end if 
	
	
