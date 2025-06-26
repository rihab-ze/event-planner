Class extends EntitySelection



exposed function create($newSession : cs.SessionEntity; $pre : variant; $hash : variant)
	var $isNotValid: boolean
	var $saved: object
	var $sessions: cs.CompanySelection
	$sessions := ds.Session.newSelection()
	$isNotValid := $newSession.checkParams($pre; $hash)
	var $selectionLength: integer
	if ($isNotValid)
		web Form.setError("Fill the required fields!")
		return this
	else 
		case of 
			: (($newSession.sDate < $newSession.event.startDate) || ($newSession.sDate > $newSession.event.endDate))
				web Form.setError("The Session should be during the selected event")
				return this
			: ($newSession.startHour > $newSession.endHour)
				web Form.setError("The starting hour should be before the ending hour")
				return this
			else 
				$saved := $newSession.save()
				if ($saved.success)
					web Form.setMessage("This session was saved successfully!")
					$sessions := this.copy()
					$sessions.add($newSession)  
					$selectionLength := ds.Session.all().length
					if ($selectionLength = 1)  
						ds.switchDisplay("sponsorsTable"; "visibility"; $selectionLength; "noLengthCss")
					end if 
					ds.setCss("addButton"; "visibility")
					ds.removeCss("newButton"; "visibility")
					return $sessions
				else 
					web Form.setError("Something went wrong!")
					return this
				end if 
		end case 
	end if 
	

