Class extends Entity


exposed function setSession($selectedSession : cs.SessionEntity)
	var $saved: object
	var $status: boolean
	$status := false
	if (ds.requiredField(this.employee.fullName; "nameT"))
		$status := true
	end if 
	if (ds.requiredField(this.mission; "missionT"))
		$status := true
	end if 
	if ($status)
		web Form.setError("fill the required fields")
	else 
		this.session := $selectedSession
		$saved := this.save()
		if ($saved.success)
			if ($selectedSession.technicians.length = 1)
				ds.switchDisplay("technicians"; "visibility"; $selectedSession.technicians.length; "noTechnicians")
			end if 
			web Form["addTechnician"].hide()
			web Form.setMessage("Technician added successfully to the selected session!")
			
		else 
			web Form.setError("Error while linking this technician")
		end if 
	end if 
	
	
	
