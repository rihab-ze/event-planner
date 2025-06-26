Class extends EntitySelection


exposed function create($newStand : cs.StandEntity)
	var $isNotValid: boolean
	var $saved: object
	var $selectionLength: integer
	var $stands: cs.StandSelection
	$stands := ds.Stand.newSelection()
	$isNotValid := $newStand.checkParams()
	if ($isNotValid)
		web Form.setError("Fill the required fields!")
		return this
	else 
		$saved := $newStand.save()
		if ($saved.success)
			web Form.setMessage("This stand was saved successfully!")
			$stands := this.copy()
			$stands.add($newStand)
			$selectionLength := ds.Stand.all().length
			if ($selectionLength = 1)
				ds.switchDisplay("standsTable"; "visibility"; $selectionLength; "noLengthCss")
			end if 
			ds.setCss("addButton"; "visibility")
			ds.removeCss("newButton"; "visibility")
			return $stands
		else 
			web Form.setError("Something went wrong!")
			return this
		end if 
	end if 
