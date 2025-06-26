var $error: object
var $obj: object
var $startUpExists: boolean
var $myWebServer: object := web Server
var $settings: object := {}

try
	// Starts the web server with the session cookie Lax
	$settings.sessionCookieSameSite := "Lax"
	$myWebServer.start($settings)
catch
	log Event("Could not start web server"; Error message)
	for Each ($error; last Errors)
		log Event("The error is "+string($error.errCode)+" - "+$error.message; Error message)
	end for each 
end try

try
	//Check if the singleton exists
	if (cs.QodlyEvents = null)
		log Event("The singleton cs.QodlyEvents does not exist"; Error message)
	else 
		//Check if the onStartup function exists
		$obj := cs.QodlyEvents.new()
		$startUpExists := OB Is defined($obj; "onStartup")
		if ($startUpExists = false)
			log Event("The singleton cs.QodlyEvents function onStartup does not exist"; Error message)
		else
			cs.QodlyEvents.me.onStartup()
		end if 
	end if 

catch
	log Event("Error at startup"; Error message)
	
	for Each ($error; last Errors)
		log Event("The error is "+string($error.errCode)+" - "+$error.message; Error message)
	end for each 
	
end try
