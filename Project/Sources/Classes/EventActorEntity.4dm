Class extends Entity

exposed function setEvent($selectedEvent : cs.EventEntity; $selectedEmployee : cs.EmployeeEntity)
	var $saved: object
	var $status: boolean := false
	this.employee := $selectedEmployee
	if (not(ds.requiredField(this.employee.fullName; "nameEventActor")))
		this.event := $selectedEvent
		$saved := this.save()
		if ($saved.success)
			if ($selectedEvent.eventActors.length = 1)
				ds.switchDisplay("eventActors"; "visibility"; $selectedEvent.eventActors.length; "noEventActors")
			end if 
			web Form.setMessage("Event Actor added successfully to the selected event!")
			web Form["addEventActor"].hide()
		else 
			web Form.setError("Error while linking this Event Actor")
		end if 
	else 
		web Form.setError("Select an event actor")
	end if 
	
