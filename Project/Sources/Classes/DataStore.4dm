Class extends DataStoreImplementation

exposed Function getManifestObject() : Object
	var $manifestFile : 4D:C1709.File
	var $manifestObject : Object
	$manifestFile:=File:C1566("/PACKAGE/Project/Sources/Shared/manifest.json")
	$manifestObject:=JSON Parse:C1218($manifestFile.getText())
	return $manifestObject
	
exposed Function setCss($serverRef : Text; $cssClass : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.addCSSClass($cssClass)
	
exposed Function removeCss($serverRef : Text; $cssClass : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.removeCSSClass($cssClass)
	
exposed Function onStartup() : cs:C1710.EmployeeEntity
	var $currentUser : cs:C1710.EmployeeEntity
	$currentUser:=ds:C1482.Employee.getCurrentUser()
	If (($currentUser#Null:C1517) && ($currentUser.myEvents.length=0))
		ds:C1482.setCss("myEvents"; "visibility")
	End if 
	If ((Session:C1714#Null:C1517) && ((Session:C1714.hasPrivilege("organize")) || (Session:C1714.hasPrivilege("commercial"))))
		ds:C1482.removeCss("goAsOrganizer"; "visibility")
	End if 
	If ((Session:C1714#Null:C1517) && (Session:C1714.hasPrivilege("commercial")))
		ds:C1482.setCss("addCompanyBtn"; "visibility")
		ds:C1482.setCss("editCompanyBtn"; "visibility")
		ds:C1482.setCss("editEmployeeBtn"; "visibility")
	End if 
	return $currentUser
	
	
exposed Function navbar($serverRef : Text)
	var $component : 4D:C1709.WebFormItem
	Web Form:C1735[$serverRef].addCSSClass("navButtonColor")
	Case of 
		: ($serverRef="eventGo")
			Web Form:C1735["sessionGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["companyGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["employeeGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["sponsorGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["standGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["metrics"].removeCSSClass("navButtonColor")
		: ($serverRef="sessionGo")
			Web Form:C1735["eventGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["companyGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["employeeGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["sponsorGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["standGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["metrics"].removeCSSClass("navButtonColor")
		: ($serverRef="companyGo")
			Web Form:C1735["eventGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["sessionGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["employeeGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["sponsorGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["standGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["metrics"].removeCSSClass("navButtonColor")
		: ($serverRef="employeeGo")
			Web Form:C1735["eventGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["companyGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["sessionGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["sponsorGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["standGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["metrics"].removeCSSClass("navButtonColor")
		: ($serverRef="sponsorGo")
			Web Form:C1735["eventGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["companyGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["employeeGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["sessionGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["standGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["metrics"].removeCSSClass("navButtonColor")
		: ($serverRef="standGo")
			Web Form:C1735["eventGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["companyGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["employeeGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["sessionGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["sponsorGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["metrics"].removeCSSClass("navButtonColor")
		: ($serverRef="metrics")
			Web Form:C1735["eventGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["companyGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["employeeGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["sessionGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["standGo"].removeCSSClass("navButtonColor")
			Web Form:C1735["sponsorGo"].removeCSSClass("navButtonColor")
	End case 
	
exposed Function switchDisplay($toHideRef : Text; $cssClass : Text; $selectionLength : Variant; $toShowRef : Text)
	var $component : 4D:C1709.WebFormItem
	var $component2 : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$toShowRef]
	$component2:=Web Form:C1735[$toHideRef]
	If ($selectionLength=0)
		$component.removeCSSClass($cssClass)
		$component2.addCSSClass($cssClass)
	Else 
		$component2.removeCSSClass($cssClass)
		$component.addCSSClass($cssClass)
	End if 
	
exposed Function generateData()
	var $dataGen : cs:C1710.fakeData
	$dataGen:=cs:C1710.fakeData.new()
	$dataGen.clearData()
	$dataGen.generateData()
	Web Form:C1735.setMessage("Data generated!")
	
exposed Function deleteIcon($search : Variant)
	If (($search#"") && ($search#Null:C1517))
		ds:C1482.removeCss("clearSearch"; "visibility")
	Else 
		ds:C1482.setCss("clearSearch"; "visibility")
	End if 
	
exposed Function requiredField($input : Variant; $serverRef : Text) : Boolean
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	
	Case of   //check type first and then do the treatment		
		: ((Value type:C1509($input)=1) && ($input=Null:C1517))  //integer
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=3) && ($input=Null:C1517))  //picture
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=30) && ($input=Null:C1517))  //blob
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=2) && ($input=""))  //string
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=4) && ($input=Date:C102(!00-00-00!)))  //date
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=5) && (Undefined:C82($input)))  //undefined
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=12) && ($input=Null:C1517))  //variant
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=6) && ($input=Null:C1517))  //boolean
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=255) && ($input=Null:C1517))  //null
			$component.addCSSClass("requiredField")
			return True:C214
		Else 
			$component.removeCSSClass("requiredField")
			return False:C215
	End case 
	
exposed Function deleteElement($dropUUID : Text; $typeDc : Text; $selectedEvent : cs:C1710.EventEntity; $selectedCompany : cs:C1710.CompanyEntity; $selectedSession : cs:C1710.SessionEntity)
	var $isDropped : Object
	var $employee : cs:C1710.EmployeeEntity
	Case of 
		: ($typeDc="SponsorEvent")
			$isDropped:=ds:C1482.Sponsor.get($dropUUID).drop()
			If ($selectedEvent.sponsors.length=0)
				This:C1470.switchDisplay("sponsors"; "visibility"; $selectedEvent.sponsors.length; "noSponsors")
			End if 
		: ($typeDc="SponsorCompany")
			$isDropped:=ds:C1482.Sponsor.get($dropUUID).drop()
			If ($selectedCompany.sponsors.length=0)
				This:C1470.switchDisplay("sponsorTable"; "visibility"; $selectedCompany.sponsors.length; "noSponsors")
			End if 
		: ($typeDc="StandEvent")
			$isDropped:=ds:C1482.Stand.get($dropUUID).drop()
			If ($selectedEvent.stands.length=0)
				This:C1470.switchDisplay("stands"; "visibility"; $selectedEvent.stands.length; "noStands")
			End if 
		: ($typeDc="StandCompany")
			$isDropped:=ds:C1482.Stand.get($dropUUID).drop()
			If ($selectedCompany.stands.length=0)
				This:C1470.switchDisplay("standTable"; "visibility"; $selectedCompany.stands.length; "noStands")
			End if 
		: ($typeDc="Session")
			$isDropped:=ds:C1482.Session.get($dropUUID).drop()
			If ($selectedEvent.sessions.length=0)
				This:C1470.switchDisplay("eventSession"; "visibility"; $selectedEvent.sessions.length; "noSession")
			End if 
		: ($typeDc="EventActor")
			$isDropped:=ds:C1482.EventActor.get($dropUUID).drop()
			If ($selectedEvent.eventActors.length=0)
				This:C1470.switchDisplay("eventActors"; "visibility"; $selectedEvent.eventActors.length; "noEventActors")
			End if 
		: ($typeDc="Technician")
			$isDropped:=ds:C1482.Technician.get($dropUUID).drop()
			If ($selectedSession.technicians.length=0)
				This:C1470.switchDisplay("technicians"; "visibility"; $selectedSession.technicians.length; "noTechnicians")
			End if 
		: ($typeDc="Speaker")
			$isDropped:=ds:C1482.Speaker.get($dropUUID).drop()
			If ($selectedSession.speakers.length=0)
				This:C1470.switchDisplay("speakers"; "visibility"; $selectedSession.speakers.length; "noSpeakers")
			End if 
		: ($typeDc="Employee")
			$employee:=ds:C1482.Employee.get($dropUUID)
			$employee.company:=Null:C1517
			$isDropped:=$employee.save()
			If ($selectedCompany.employees.length=0)
				This:C1470.switchDisplay("employeeMatrix"; "visibility"; $selectedCompany.employees.length; "noEmployee")
			End if 
	End case 
	If ($isDropped.success)
		Web Form:C1735.setMessage($typeDc+" was successfully deleted")
	Else 
		Web Form:C1735.setError("Something went wrong")
	End if 
	
	
	
exposed Function sbVisibility($standDc : Variant)
	If ($standDc="Company")
		This:C1470.removeCss("event"; "visibility")
		This:C1470.removeCss("sponsorEvent"; "visibility")
	Else 
		This:C1470.removeCss("company"; "visibility")
		This:C1470.removeCss("sponsorCompany"; "visibility")
	End if 
	
	
exposed Function authentify($email : Text; $password : Text) : cs:C1710.EmployeeEntity
	var $user : cs:C1710.EmployeeEntity
	var $privileges : Collection
	var $guestPrev : Collection:=["guest"; "guestPromoted"]
	If (($email="") && ($password=""))
		Session:C1714.setPrivileges($guestPrev)
		return Null:C1517
	End if 
	If (($email#"") && ($password#""))
		$user:=ds:C1482.Employee.query("mail = :1"; $email).first()
		If ($user#Null:C1517)
			If ($password=$user.password)
				Use (Session:C1714.storage)
					Session:C1714.storage.payload:=New shared object:C1526("ID"; $user.UUID; "email"; $user.mail; "role"; $user.role)
				End use 
				Case of 
					: ($user.role="Admin")
						$privileges:=["organize"; "visit"; "guest"]
					: ($user.role="Commercial")
						$privileges:=["commercial"; "visit"; "guest"]
					: ($user.role="Client")
						$privileges:=["visit"; "guest"]
					Else 
						$privileges:=Null:C1517
				End case 
				Session:C1714.setPrivileges($privileges)
				Web Form:C1735.dialog.hide()
				return $user
			Else 
				Web Form:C1735.setWarning("The username or password is incorrect!")
			End if 
		Else 
			Web Form:C1735.setWarning("The username or password is incorrect!")
		End if 
	Else 
		Web Form:C1735.setWarning("Please fill all required fields")
	End if 
	
exposed Function setNewPassword($email : Text; $newPwd : Text) : Text
	var $user : cs:C1710.EmployeeEntity
	var $status : Object
	If ($email="")
		Web Form:C1735.setWarning("Please Enter Your Email !!")
	Else 
		If ($newPwd#"")
			$user:=ds:C1482.Employee.query("mail = :1"; $email).first()
			If ($user#Null:C1517)
				$user.password:=$newPwd
				$status:=$user.save()
				If ($status.success)
					Web Form:C1735.setMessage("Password updated!")
					return "login"
				Else 
					Web Form:C1735.setError("Error!")
				End if 
			Else 
				Web Form:C1735.setError("Email incorrect!")
			End if 
		Else 
			Web Form:C1735.setError("Please enter your new password!")
		End if 
	End if 
	
exposed Function signIn($email : Text; $pwd : Text; $confirmedPwd : Text; $lastName : Text; $firstName : Text) : Text
	var $employee : cs:C1710.EmployeeEntity
	var $info : Object
	var $privileges : Collection
	If (($email="") || ($pwd="") || ($confirmedPwd="") || ($lastName="") || ($firstName=""))
		Web Form:C1735.setWarning("Please fill all required fields")
	Else 
		If ($pwd#$confirmedPwd)
			Web Form:C1735.setWarning("password don't match")
		Else 
			$employee:=ds:C1482.Employee.query("mail = :1"; $email).first()
			If ($employee#Null:C1517)
				Web Form:C1735.setWarning("Email already exists")
			Else 
				$employee:=ds:C1482.Employee.new()
				$employee.firstName:=$firstName
				$employee.lastName:=$lastName
				$employee.mail:=$email
				$employee.password:=$pwd
				$employee.role:="Client"
				$employee.awsID:="aws"+$employee.UUID
				$employee.address:={first: ""; second: ""; zipCode: 0; state: ""; city: ""}
				$employee.moreInfo:={phone: ""}
				$privileges:=["visit"; "guest"]
				Session:C1714.setPrivileges($privileges)
				$info:=$employee.save()
				If ($info.success)
					Web Form:C1735.setMessage("Account created successfully!")
					return "login"
				End if 
			End if 
		End if 
	End if 
	