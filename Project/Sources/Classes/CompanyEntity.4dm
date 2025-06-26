Class extends Entity

function checkParams($address1:variant;$address2:variant;$city:variant;$state:variant;$zipCode:variant) : boolean
	this.address:= new Object("address1";$address1;"address2";$address2;"city";$city;"zipCode";$zipCode;"state";$state)
	var $status: boolean
	if(ds.requiredField(this.name;"name"))
		$status := true
	end if
	if(ds.requiredField(this.address.address1;"first")) 
		$status := true
	end if
	if(ds.requiredField(this.country;"country"))
		$status := true
	end if
	if(ds.requiredField(this.address.city;"city"))
		$status := true
	end if
	return $status

exposed function edit($address1:variant;$address2:variant;$city:variant;$state:variant;$zipCode:variant) : cs.CompanyEntity
	var $isNotValid: boolean
	var $saved: object
	$isNotValid := this.checkParams($address1;$address2;$city;$state;$zipCode)
	if ($isNotValid)
		web Form.setError("Fill the required fields!")
		return this
	else 
		$saved := this.save()
		if ($saved.success)
			web Form.setMessage("This Company was updated successfully!")
		else 
			web Form.setError("Something went wrong!")
		end if 
		return this
	end if

exposed function setEmployee($selectedEmployee : cs.EmployeeEntity)
	var $saved: object
	var $status: boolean
	if ($selectedEmployee = null)
		web Form.setError("Select an employee first!")
	else 
		$selectedEmployee.company := this
		$saved := $selectedEmployee.save()
		if ($saved.success)
			if (this.employees.length = 1)
				ds.switchDisplay("employeeMatrix"; "visibility"; this.employees.length; "noEmployee")
			end if 
			web Form.setMessage("Employee added successfully to the selected event!")
			web Form["addEmployee"].hide()
		else 
			web Form.setError("Error while linking this Event Actor")
		end if 
	end if 