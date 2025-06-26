Class extends Entity


exposed function checkParams($pre : variant; $hash : variant) : boolean
	this.moreInfo := new Object("prerequisites"; $pre; "hashtags"; $hash)
	var $status: boolean
	if (ds.requiredField(this.name; "name"))
		$status := true
	end if
	if (ds.requiredField(this.subject; "subject"))
		$status := true
	end if 
	if (ds.requiredField(this.type; "type"))
		$status := true
	end if 
	if (ds.requiredField(this.event; "event"))
		$status := true
	end if 
	if (ds.requiredField(this.sDate; "sDate"))
		$status := true
	end if 
	if (ds.requiredField(this.startHour; "sHour"))
		$status := true
	end if 
	if (ds.requiredField(this.endHour; "eHour"))
		$status := true
	end if 
	return $status
	
exposed function edit($pre : variant; $hash : variant) : cs.SessionEntity
	var $isNotValid: boolean
	var $saved: object
	$isNotValid := this.checkParams($pre; $hash)
	if ($isNotValid)
		web Form.setError("Fill the required fields!")
		return this
	else 
		case of 
			: ((this.sDate < this.event.startDate) || (this.sDate > this.event.endDate))
				web Form.setError("The Session should be during the selected event")
				return this
			: (this.startHour > this.endHour)
				web Form.setError("The starting hour should be before the ending hour")
				return this
			else 
				$saved := this.save()
				if ($saved.success)
					web Form.setMessage("This session was updated successfully!")
				else 
					web Form.setError("Something went wrong!")
				end if 
				return this
		end case 
	end if 
	