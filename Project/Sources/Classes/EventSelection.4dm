Class extends EntitySelection


exposed function create($newEvent : cs.EventEntity; $address1 : variant; $address2 : variant; $city : variant; $zipCode : variant; $state : variant)
	var $saved: object
	var $isNotValid: boolean
	var $events: cs.CompanySelection
	$events := ds.Event.newSelection()
	$isNotValid := $newEvent.checkParam()
	$newEvent.address := new Object("address1"; $address1; "address2"; $address2; "city"; $city; "zipCode"; $zipCode; "state"; $state)
	
	if ($newEvent.access = null)
		$newEvent.access := "Public"
	end if 
	if ($isNotValid)
		web Form.setError("Fill the required fields!")
		return this
	else 
		if (($newEvent.startDate > $newEvent.endDate) && ($newEvent.startDate <= current Date()))
			web Form.setWarning("Please choose valid event dates!")
			return this
		else 
			$saved := $newEvent.save()
			if ($saved.success)
				web Form.setMessage("Event successfully saved")
				$events := this.copy()
				$events.add($newEvent)
				if (ds.Event.all().length = 1)
					ds.switchDisplay("eventTab"; "visibility"; ds.Event.Event.all().length; "noEventImg")
					ds.setCss("eventSearch"; "visibility")
				end if 
				ds.setCss("addButton"; "visibility")
				ds.removeCss("newButton"; "visibility")
				return $events
			else 
				web Form.setError("Something went wrong")
				return this
			end if 
		end if 
	end if 
	
exposed function pastEvent() : cs.EventSelection
	return this.query("startDate < :1"; current Date())
	
	
exposed function upcomingEvents() : cs.EventSelection
	return this.query("startDate >= :1"; current Date()).orderBy("startDate")
