Class extends EntitySelection


exposed function create($newCompany : cs.CompanyEntity; $address1 : variant; $address2 : variant; $city : variant; $state : variant; $zipCode : variant) : cs.CompanySelection
	var $isNotValid: boolean
	var $saved: object
	var $selectionLength: integer
	var $companies: cs.CompanySelection
	$companies := ds.Company.newSelection()
	$isNotValid := $newCompany.checkParams($address1; $address2; $city; $state; $zipCode)
	if ($isNotValid)
		web Form.setError("Fill the required fields!")
		return this
	else 
		$saved := $newCompany.save()
		if ($saved.success)
			web Form.setMessage("This company was saved successfully!")
			$companies := this.copy()
			$companies.add($newCompany)  
			$selectionLength := ds.Company.all().length
			if ($selectionLength = 1) 
				ds.switchDisplay("hideCampo"; "visibility"; $selectionLength; "noCompanies")
			end if 
			ds.setCss("addButton"; "visibility")
			ds.removeCss("newButton"; "visibility")
			return $companies
		else 
			web Form.setError("Something went wrong!")
			return this
		end if 
	end if 
	