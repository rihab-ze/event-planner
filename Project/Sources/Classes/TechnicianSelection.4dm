Class extends EntitySelection

exposed Function removeFromList($tech : cs.TechnicianEntity) : cs.TechnicianSelection
	var $selection: cs.TechnicianSelection
	$selection:=This.minus($tech)
	return $selection

	