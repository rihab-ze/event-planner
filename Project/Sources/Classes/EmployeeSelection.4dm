Class extends EntitySelection

exposed Function addInList($employee : cs.EmployeeEntity) : cs.EmployeeSelection
	var $selection: cs.EmployeeSelection
	$selection:=This.copy()
	$selection.add($employee)
	return $selection

exposed Function removeFromList($employee : cs.EmployeeEntity) : cs.EmployeeSelection
	var $selection: cs.EmployeeSelection
	$selection:=This.minus($employee)
	return $selection

	
exposed function queryEventActor($selectedEvent : cs.EventEntity) : cs.EmployeeSelection
	return this.query("not(UUID IN :1)";$selectedEvent.eventActors.employee.UUID)

exposed Function querySpeaker($selectedSession : cs.SessionSelection) : cs.EmployeeSelection
	return this.query("not(UUID IN :1)";$selectedSession.speakers.employee.UUID)
