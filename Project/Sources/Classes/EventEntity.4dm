Class extends Entity

exposed alias attendees inscriptions.employee
exposed alias speakeers sessions.speakers
exposed alias techs sessions.technicians


exposed function get isToday() : text
	return (this.startDate = current Date()) ? "Today" : ""
	
exposed function get duration() : text
	case of 
		: ((this.startDate # null) && (this.endDate # null) && (this.startDate < this.endDate))
			return string(date(this.endDate)-date(this.startDate))+" day(s)"
		: (this.startDate = null) && (this.endDate = null)
			return "0 days"
		: ((this.startDate # null) && (this.endDate # null) && (this.startDate > this.endDate))
			return "0 days"
		: ((this.startDate # null) && (this.endDate # null) && (this.startDate = this.endDate))
			return string(date(this.endDate)-date(this.startDate))+" day(s)"
		else 
			//
	end case 
	
exposed function checkParam() : boolean
	var $isNotValid: boolean
	$isNotValid := false
	if (ds.requiredField(this.name; "nameE"))
		$isNotValid := true
	end if 
	if (ds.requiredField(this.location; "locationE"))
		$isNotValid := true
	end if 
	if (ds.requiredField(this.startDate; "start"))
		$isNotValid := true
	end if 
	if (ds.requiredField(this.endDate; "end"))
		$isNotValid := true
	end if 
	if (ds.requiredField(this.country; "countryE"))
		$isNotValid := true
	end if 
	return $isNotValid
	
exposed function edit($address1 : variant; $address2 : variant; $city : variant; $zipCode : variant; $state : variant) : cs.EventEntity
	var $saved: object
	var $isNotValid: boolean
	$isNotValid := this.checkParam()
	this.address := new Object("address1"; $address1; "address2"; $address2; "city"; $city; "zipCode"; $zipCode; "state"; $state)
	if ($isNotValid = false)
		if ((this.startDate > this.endDate) && (this.startDate <= current Date()))
			web Form.setWarning("Please choose valid event dates!")
			return this
		else 
			$saved := this.save()
			if ($saved.success)
				web Form.setMessage("event successfully updated")
			else 
				web Form.setError("Something went wrong")
			end if 
			return this
		end if 
	else 
		web Form.setError("Fill the required fields!")
		return this
	end if 
	
exposed function get isJoined() : text
	var $inscription: cs.InscriptionEntity
	if(session.storage.payload.email#null)
		$inscription:=this.inscriptions.query("employee.mail = :1"; session.storage.payload.email).first()
	else
		$inscription:=this.inscriptions.query("employee.awsID = :1"; session.userName)
	end if
	if ($inscription = null)
		return "Join"
	else 
		return "Joined"
	end if 
	
exposed function join()
	var $saved: object
	var $inscriptionTypes: cs.InscriptionType
	var $currentUser: cs.EmployeeEntity := ds.Employee.getCurrentUser()
	var $inscription: cs.Inscription
	$inscriptionTypes := ds.InscriptionType.all()
	$inscription := ds.Inscription.new()
	$inscription.employee := $currentUser
	$inscription.event := this
	$saved := $inscription.save()
	$currentUser.reload()
	if ($saved.success)
		web Form.setMessage("You joined this event!")
	else 
		web Form.setError("Error while joining!")
	end if 
	
exposed function setFirstSession()
	if (this.sessions.length # 0)
		use (session.storage)
			session.storage.firstSession := new Shared Object("UUID"; this.sessions.first().UUID)
		end use 
	end if 
