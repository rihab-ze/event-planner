Class extends EntitySelection



exposed function create($newSponsor : cs.SponsorEntity; $contact : variant)
	var $isNotValid: boolean
	var $saved: object
	var $selectionLength: integer
	var $sponsors: cs.SponsorSelection
	$sponsors := ds.Sponsor.newSelection()
	$isNotValid := $newSponsor.checkParams($contact)
	if ($isNotValid)
		web Form.setError("Fill the required fields!")
		return this
	else 
		$saved := $newSponsor.save()
		if ($saved.success)
			web Form.setMessage("This sponsor was saved successfully!")
			$sponsors := this.copy()
			$sponsors.add($newSponsor)  
			$selectionLength := ds.Sponsor.all().length
			if ($selectionLength = 1)  
				ds.switchDisplay("sponsorsTable"; "visibility"; $selectionLength; "noSessions")
			end if 
			ds.setCss("addButton"; "visibility")
			ds.removeCss("newButton"; "visibility")
			return $sponsors
		else 
			web Form.setError("Something went wrong!")
			return this  
		end if 
	end if 
	
	
	
