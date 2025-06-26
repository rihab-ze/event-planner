Class extends Entity


exposed function setSession($selectedSession : cs.SessionEntity)
	var $saved: object
	var $status: boolean
	$status := false
	if (ds.requiredField(this.employee.fullName; "nameS"))
		$status := true
	end if 
	if ($status)
		web Form.setError("Select an employee")
	else 
		this.session := $selectedSession
		$saved := this.save()
		if ($saved.success)
			if ($selectedSession.speakers.length > 0)
				ds.switchDisplay("speakers"; "visibility"; $selectedSession.speakers.length; "noSpeakers")
			end if 
			web Form.setMessage("Speaker added successfully to the selected session!")
			web Form["addSpeaker"].hide()
		else 
			web Form.setError("Error while linking this speaker")
		end if 
	end if 
	
