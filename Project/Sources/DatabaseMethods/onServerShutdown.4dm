var $error: object
var $obj: object
var $stopExists: boolean

try
	//Check if the QodlyEvents singleton exists
	if (cs.QodlyEvents # null)
		$obj := cs.QodlyEvents.new()
		$stopExists := OB Is defined($obj; "onStop")
		if ($stopExists = false)
			log Event("The singleton cs.QodlyEvents function onStop does not exist"; Error message)
		else
			cs.QodlyEvents.me.onStop()
		end if 
	else
		log Event("The singleton cs.QodlyEvents does not exist"; Error message)
	end if 

catch
	log Event("Error on stop"; Error message)
	
	for Each ($error; last Errors)
		log Event("The error is "+string($error.errCode)+" - "+$error.message; Error message)
	end for each 
	
end try
