Function newEvent()
	var $event : cs:C1710.EventEntity
	
	var $countryList : Collection
	$countryList:=New collection:C1472("Morocco"; "France"; "Germany"; "USA"; "Japan"; "Australia"; "Spain"; "Italy"; "Denmark")
	
	var $hotels : Collection
	$hotels:=New collection:C1472("La Mamounia"; "Plaza Athénée"; "Adlon Kempinski"; "The Plaza Hotel"; "Park Hyatt Tokyo"; "Shangri-La Hotel"; "Hotel Arts"; "Danieli"; "Hotel d'Angleterre")
	
	var $addressList : Collection
	$addressList:=New collection:C1472("Avenue Bab Jdid"; "25 Avenue Montaigne"; "Unter den Linden"; "768 5th Ave"; "3-7-1-2 Nishi Shinjuku, Shinjuku-Ku"; "176 Cumberland St, The Rocks"; "Carrer de la Marina"; "Riva degli Schiavoni"; "Kongens Nytorv 34")
	
	var $countryCityList : Collection
	$countryCityList:=New collection:C1472({country: "Morocco"; city: "Marrakech"; state: "Morocco"}; {country: "France"; city: "Paris"; state: "France"}; {country: "Germany"; city: "Berlin"; state: "Berlin"}; {country: "USA"; city: "New York"; state: "USA"}; {county: "Japan"; city: "Tokyo"; state: "Asia"}; {country: "Australia"; city: "Sydney"; state: "Australia"}; \
		{country: "Spain"; city: "Barcelona"; state: "Spain"}; {country: "Italy"; city: "Venice"; state: "Italy"}; {country: "Denmark"; city: "Copenhagen"; state: "Denmark"})
	
	
	var $eventList : Collection
	$eventList:=New collection:C1472("Fall winter - 2023 Event"; "Summer - 2023 Event"; "4D Summit 2023"; "Qodly Studio Workshop"; "Qodly Launch Event"; "Summer Hackathon"; "Fall Hackaton"; "4D Webinar"; "4D Dev MeetUp")
	
	var $accessList : Collection
	$accessList:=New collection:C1472("Private"; "Public")
	
	var $repeatList : Collection
	$repeatList:=New collection:C1472("Every Year"; "Every Week")
	
	
	var $index : Integer
	$index:=0
	var $info : Object
	var $randomCountryCity : Object
	
	While ($index<9)
		$event:=ds:C1482.Event.new()
		$event.name:=$eventList.at($index)
		$event.location:=$hotels.at($index)
		$event.country:=$countryList.at($index)
		$event.startDate:=Add to date:C393(Current date:C33; 0; $index; $index)
		$event.endDate:=Add to date:C393($event.startDate; 0; 0; 10+$index)
		$randomCountryCity:=$countryCityList.at($index)
		$event.address:={address1: $addressList.at($index); address2: $addressList.at($index); country: $randomCountryCity.country; city: $randomCountryCity.city; zipCode: "1111"; state: $randomCountryCity.state}
		
		$event.access:=$accessList.at((Random:C100%($accessList.length)))
		$info:=$event.save()
		$index:=$index+1
	End while 
	
	
Function newInscriptionType()
	var $inscriptionType : cs:C1710.InscriptionTypeEntity
	
	var $types : Collection
	$types:=New collection:C1472("VIP"; "Normal"; "Silver")
	var $index : Text
	var $info : Object
	
	For each ($index; $types)
		$inscriptionType:=ds:C1482.InscriptionType.new()
		$inscriptionType.name:=$index
		$info:=$inscriptionType.save()
	End for each 
	
	
Function newInscription()
	var $inscription : cs:C1710.InscriptionEntity
	
	var $types : cs:C1710.InscriptionTypeSelection
	$types:=ds:C1482.InscriptionType.all()
	
	var $employees : cs:C1710.EmployeeSelection
	$employees:=ds:C1482.Employee.all()
	
	var $attendees : cs:C1710.AttendeSelection
	$attendees:=ds:C1482.Attende.all()
	
	var $events : cs:C1710.EventSelection
	$events:=ds:C1482.Event.all()
	
	var $employee : cs:C1710.EmployeeEntity
	
	var $index : Integer
	$index:=0
	
	var $info : Object
	
	var $attendee : cs:C1710.AttendeEntity
	
	For each ($employee; $employees)
		$inscription:=ds:C1482.Inscription.new()
		$inscription.price:=100+$index*20
		$inscription.event:=$events.at((Random:C100%($events.length)))
		$inscription.type:=$types.at((Random:C100%($types.length)))
		$inscription.moreInfo:=$employee.moreInfo
		For each ($attendee; $attendees)
			If ($employee.UUID=$attendee.employee.UUID)
				$inscription.survey:=$attendee.survey
				break
			Else 
				$inscription.survey:={}
			End if 
		End for each 
		$inscription.employee:=$employee
		$info:=$inscription.save()
		$index:=$index+1
	End for each 
	
	
Function newRoom()
	var $room : cs:C1710.RoomEntity
	
	var $events : cs:C1710.EventSelection
	$events:=ds:C1482.Event.all()
	
	var $i : Integer
	$i:=0
	var $info : Object
	While ($i<10)
		$room:=ds:C1482.Room.new()
		$room.name:="Room "+String:C10($i)
		$room.capacity:=20+$i*20
		$room.floor:="Floor "+String:C10((Random:C100%(3+1)))
		$room.configuration:="Theater Style"
		$room.moreinfo:={$info: "You can find your lost items in the entrance."; wifi: "wifi-room"+String:C10($i)+"-password"}
		$room.event:=$events.at((Random:C100%($events.length+1)))
		$info:=$room.save()
		$i:=$i+1
	End while 
	
	
Function newLanguage()
	var $language : cs:C1710.LanguageEntity
	
	var $languages : Collection
	$languages:=New collection:C1472({name: "English"; code: "EN"}; {name: "French"; code: "FR"}; {name: "Arabic"; code: "AR"})
	
	var $index : Object
	var $info : Object
	
	For each ($index; $languages)
		$language:=ds:C1482.Language.new()
		$language.name:=$index["name"]
		$language.code:=$index["code"]
		$info:=$language.save()
	End for each 
	
	
	
	
Function newSessionType()
	var $sessionType : cs:C1710.SessionTypeEntity
	
	var $sessionTypes : Collection
	$sessionTypes:=New collection:C1472("Keynote"; "Breakfast"; "Conference"; "Breakout Session"; "Event Recap"; "Party"; "Workshop"; "Hackathon"; "Case Study Presentation"; "Brainstorming Session"; "Deep Dive Session"; "Mini Bootcamp"; "Ask Me Anything (AMA)"; "Open Mic")
	
	var $item : Text
	var $info : Object
	
	For each ($item; $sessionTypes)
		$sessionType:=ds:C1482.SessionType.new()
		$sessionType.name:=$item
		$info:=$sessionType.save()
	End for each 
	
	
Function newSession()
	var $startingHours : Collection
	$startingHours:=New collection:C1472("9:00"; "9:30"; "10:00"; "10:30"; "11:00"; "11:30"; "12:00"; "14:00"; "14:30"; "15:00"; "15:30"; "16:00"; "16:30"; "16:45"; "17:00")  //testing
	
	var $sessionTypes : cs:C1710.SessionTypeSelection
	$sessionTypes:=ds:C1482.SessionType.all()
	
	var $events : cs:C1710.EventSelection
	$events:=ds:C1482.Event.all()
	
	var $rooms : cs:C1710.RoomSelection
	$rooms:=ds:C1482.Room.all()
	
	var $languages : cs:C1710.LanguageSelection
	$languages:=ds:C1482.Language.all()
	
	var $sessionEntity : cs:C1710.SessionEntity
	
	var $event : cs:C1710.EventEntity
	
	var $sType : cs:C1710.SessionTypeEntity
	
	var $i : Integer
	$i:=0
	
	var $info : Object
	
	For each ($event; $events)
		For each ($sType; $sessionTypes)
			If ((Random:C100%3)#1)
				$sessionEntity:=ds:C1482.Session.new()
				$sessionEntity.name:=$sType.name+" - "+$event.name
				$sessionEntity.sDate:=Add to date:C393(Current date:C33; 0; $i; $i)
				$sessionEntity.startHour:=Time:C179($startingHours.at((Random:C100%($startingHours.length))))
				$sessionEntity.endHour:=$sessionEntity.startHour+Time:C179(?01:00:00?)
				$sessionEntity.subject:="This session is the "+$sType.name+" of the "+$event.name+" event"
				$sessionEntity.abstract:="Embark on a journey with us into "+$event.name+" during this session. Guided by knowledgeable leaders, this session offers a brief exploration into the topic at hand."
				$sessionEntity.level:="level "+String:C10($i)
				$sessionEntity.resourceLink:="Link "+String:C10($i)
				$sessionEntity.moreInfo:={prerequisites: "4D Language"; hashtags: "#"+$sType.name}
				$sessionEntity.type:=$sType
				$sessionEntity.event:=$event
				$sessionEntity.room:=$rooms.at((Random:C100%($rooms.length)))
				$sessionEntity.language:=$languages.at((Random:C100%($languages.length)))
				$i:=$i+1
				
				$info:=$sessionEntity.save()
			End if 
		End for each 
	End for each 
	
	
Function newEmployee()
	var $oneUser : Object
	var $employee : cs:C1710.EmployeeEntity
	var $companyList : cs:C1710.CompanySelection
	$companyList:=ds:C1482.Company.all()
	var $users : Collection:=[\
		{firstName: "John"; lastName: "Smith"; password: "a1b2c3"; email: "john.smith@example.com"; role: "Admin"}; \
		{firstName: "Alice"; lastName: "Johnson"; password: "d4e5f6"; email: "alice.johnson@example.com"; role: "Client"}; \
		{firstName: "Robert"; lastName: "Brown"; password: "g7h8i9"; email: "robert.brown@example.com"; role: "Commercial"}; \
		{firstName: "Emily"; lastName: "Davis"; password: "j0k1l2"; email: "emily.davis@example.com"; role: "Commercial"}; \
		{firstName: "Michael"; lastName: "Miller"; password: "m3n4o5"; email: "michael.miller@example.com"; role: "Commercial"}; \
		{firstName: "Sarah"; lastName: "Wilson"; password: "p6q7r8"; email: "sarah.wilson@example.com"; role: "Commercial"}; \
		{firstName: "David"; lastName: "Moore"; password: "s9t0u1"; email: "david.moore@example.com"; role: "Commercial"}; \
		{firstName: "Laura"; lastName: "Taylor"; password: "v2w3x4"; email: "laura.taylor@example.com"; role: "Admin"}; \
		{firstName: "Daniel"; lastName: "Anderson"; password: "y5z6a7"; email: "daniel.anderson@emxample.com"; role: "Admin"}; \
		{firstName: "Jessica"; lastName: "Thomas"; password: "b8c9d0"; email: "jessica.thomas@example.com"; role: "Admin"}; \
		{firstName: "Matthew"; lastName: "Jackson"; password: "e1f2g3"; email: "matthew.jackson@example.com"; role: "Admin"}; \
		{firstName: "Olivia"; lastName: "White"; password: "h4i5j6"; email: "olivia.white@example.com"; role: "Admin"}; \
		{firstName: "Andrew"; lastName: "Harris"; password: "k7l8m9"; email: "andrew.harris@example.com"; role: "Client"}; \
		{firstName: "Sophia"; lastName: "Martin"; password: "n0o1p2"; email: "sophia.martin@example.com"; role: "Client"}; \
		{firstName: "Christopher"; lastName: "Thompson"; password: "q3r4s5"; email: "christopher.thompson@example.com"; role: "Commercial"}; \
		{firstName: "Emma"; lastName: "Garcia"; password: "t6u7v8"; email: "emma.garcia@example.com"; role: "Admin"}; \
		{firstName: "Anthony"; lastName: "Martinez"; password: "w9x0y1"; email: "anthony.martinez@example.com"; role: "Admin"}; \
		{firstName: "Isabella"; lastName: "Robinson"; password: "z2a3b4"; email: "isabella.robinson@example.com"; role: "Admin"}; \
		{firstName: "Joshua"; lastName: "Clark"; password: "c5d6e7"; email: "joshua.clark@example.com"; role: "Commercial"}; \
		{firstName: "Mia"; lastName: "Rodriguez"; password: "f8g9h0"; email: "mia.rodriguez@example.com"; role: "Commercial"}\
		]
	
	
	var $info : Object
	var $request : 4D:C1709.HTTPRequest
	For each ($oneUser; $users)
		$employee:=ds:C1482.Employee.new()
		$employee.firstName:=$oneUser.firstName
		$employee.lastName:=$oneUser.lastName
		$employee.mail:=$oneUser.email
		$employee.role:=$oneUser.role
		$employee.civility:="Mme/M"
		$employee.password:="password"
		$employee.commMeans:={email: $employee.mail}
		$employee.address:={first: "N150"; second: "Street K"; state: "State"; city: "Rabat"; zipCode: "10113"}
		$employee.moreInfo:={phone: "+212600000000"}
		$employee.company:=$companyList.at((Random:C100%($companyList.length)))
		$info:=$employee.save()
	End for each 
	
	
Function newAttendee()
	var $attendee : cs:C1710.AttendeEntity
	
	var $techs : cs:C1710.TechnicianSelection
	$techs:=ds:C1482.Technician.all()
	var $t : cs:C1710.TechnicianEntity
	
	
	var $speakers : cs:C1710.SpeakerSelection
	$speakers:=ds:C1482.Speaker.all()
	var $s : cs:C1710.SpeakerEntity
	
	var $sessions : cs:C1710.SessionSelection
	$sessions:=ds:C1482.Session.all()
	var $sess : cs:C1710.SessionEntity
	
	var $employees : cs:C1710.EmployeeSelection
	$employees:=ds:C1482.Employee.all()
	var $employee : cs:C1710.EmployeeEntity
	
	var $i : Integer
	$i:=0
	var $info : Object
	
	For each ($sess; $sessions)
		$attendee:=ds:C1482.Attende.new()
		$attendee.employee:=$employees.at((Random:C100%($employees.length)))
		$attendee.isPresent:=True:C214
		$attendee.survey:={rating: (Random:C100%(10-7+1))+7; comment: "Great event; learned a lot!"}
		$attendee.session:=$sess
		$info:=$attendee.save()
		$i:=$i+1
	End for each 
	
	
Function newTechnician()
	var $technician : cs:C1710.TechnicianEntity
	
	var $sessions : cs:C1710.SessionSelection
	$sessions:=ds:C1482.Session.all()
	
	var $missions : Collection
	$missions:=New collection:C1472("Micro-volant"; "Time Keeper"; "Audio/Video")
	
	var $employees : cs:C1710.EmployeeSelection
	$employees:=ds:C1482.Employee.all()
	
	var $mission : Text
	var $info : Object
	var $index : cs:C1710.SessionEntity
	
	For each ($index; $sessions)
		For each ($mission; $missions)
			$technician:=ds:C1482.Technician.new()
			$technician.employee:=$employees.at((Random:C100%($employees.length)))
			$technician.mission:=$mission
			$technician.session:=$index
			$info:=$technician.save()
		End for each 
	End for each 
	
	
	
Function newSpeaker()
	var $speaker : cs:C1710.SpeakerEntity
	
	var $sessions : cs:C1710.SessionSelection
	$sessions:=ds:C1482.Session.all()
	
	var $employees : cs:C1710.EmployeeSelection
	$employees:=ds:C1482.Employee.all()
	
	var $info : Object
	var $index : cs:C1710.SessionEntity
	
	var $randomSession : cs:C1710.SessionEntity
	For each ($index; $sessions)
		$speaker:=ds:C1482.Speaker.new()
		$speaker.employee:=$employees.at((Random:C100%($employees.length)))
		$speaker.session:=(($randomSession=Null:C1517) ? $index : $randomSession)
		$info:=$speaker.save()
	End for each 
	
	
	
Function newEquipement()
	var $equipement : cs:C1710.EquipmentEntity
	
	var $equipList : Collection
	$equipList:=New collection:C1472({equip: "Speaker"; kind: "Audio Equipment"}; {equip: "Microphone"; kind: "Audio Equipment"}; {equip: "Projector"; kind: "Visual  Equipment"}; {equip: "SpotLight"; kind: "Lighting Equipement"}; {equip: "Floodlights"; kind: "Lighting Equipement"}; {equip: "Table"; kind: "Furniture"}; {equip: "Seat"; kind: "Furniture"})
	
	var $kinds : Collection
	$kinds:=New collection:C1472("")
	
	var $rooms : cs:C1710.RoomSelection
	$rooms:=ds:C1482.Room.all()
	
	var $index : Object
	var $info : Object
	For each ($index; $equipList)
		$equipement:=ds:C1482.Equipment.new()
		$equipement.name:=$index["equip"]
		$equipement.kind:=$index["kind"]
		$equipement.room:=$rooms.at((Random:C100%($rooms.length)))
		$info:=$equipement.save()
	End for each 
	
	
	
	
Function newCompany()
	var $company : cs:C1710.CompanyEntity
	
	var $marocAddress : Object
	$marocAddress:={address1: "Av. Annakhil Angle Av. Al Haour Imm BID; 1er étage"; address2: "Hay Riad"; city: "Rabat"; zipCode: "10113"; country: "Morocco"; state: "Morocco"}
	
	var $franceAddress : Object
	$franceAddress:={address1: "Parc les Erables; bâtiment 4 "; address2: "66 route de Sartrouville"; city: "Paris"; zipCode: "78230"; country: "France"; state: "France"}
	
	var $germanyAddress : Object
	$germanyAddress:={address1: "Ob. Hauptstraße 2"; address2: "Eching"; city: "Munich"; zipCode: "85386"; country: "Germany"; state: "Germany"}
	
	var $usAddress : Object
	$usAddress:={address1: "95 S. Market Street Suite"; address2: ""; city: "San Jose"; zipCode: "95113"; country: "USA"; state: "USA"}
	
	var $australiAddress : Object
	$australiAddress:={address1: "Suite 6/14 Eastern Rd "; address2: "Turramurra NSW 2074"; city: "Sydney"; zipCode: "2074"; country: "Australia"; state: "Australia"}
	
	var $japanAddress : Object
	$japanAddress:={address1: "1-chome-10-2 Dogenzaka"; address2: "Shibuya City"; city: "Tokyo"; zipCode: "150-0043"; country: "Japan"; state: "Japan"}
	
	var $countryList : Collection
	$countryList:=New collection:C1472($marocAddress; $franceAddress; $germanyAddress; $usAddress; $australiAddress; $japanAddress)
	
	
	var $companyNames : Collection
	$companyNames:=New collection:C1472("4D"; "8D"; "It Consulting"; "DevLine"; "CompuTime"; "IT"; "Microsoft")
	
	var $index : Object
	var $i : Text
	var $info : Object
	
	For each ($index; $countryList)
		$company:=ds:C1482.Company.new()
		$company.name:=$companyNames.at((Random:C100%($companyNames.length)))+" "+$index["country"]
		$company.country:=$index["country"]
		$company.address:=$index
		
		$info:=$company.save()
	End for each 
	
	
	
Function newStand()
	var $stand : cs:C1710.StandEntity
	
	var $events : cs:C1710.EventSelection
	$events:=ds:C1482.Event.all()
	var $event : cs:C1710.EventEntity
	
	var $companies : cs:C1710.CompanySelection
	$companies:=ds:C1482.Company.all()
	var $company : cs:C1710.CompanyEntity
	
	var $sizes : Collection
	$sizes:=New collection:C1472({size: "2m x 2m"; price: "21345"}; {size: "3m x 2m"; price: "21345"}; {size: "4m x 2m"; price: "21345"}; {size: "3m x 3m"; price: "21345"}; {size: "4m x 3m"; price: "21345"})
	
	var $i : Object
	var $info : Object
	
	For each ($event; $events)
		For each ($company; $companies)
			If ((Random:C100%3)#1)
				$stand:=ds:C1482.Stand.new()
				$i:=$sizes.at((Random:C100%($sizes.length)))
				$stand.size:=$i["size"]
				$stand.price:=$i["price"]
				$stand.company:=$company
				$stand.event:=$event
				$stand.floor:="Floor "+String:C10(Random:C100%(5+1))
				$info:=$stand.save()
			End if 
		End for each 
	End for each 
	
	
Function newExhibitor()
	var $exhibitor : cs:C1710.ExhibitorEntity
	
	var $stands : cs:C1710.StandSelection
	$stands:=ds:C1482.Stand.all()
	
	var $employees : cs:C1710.EmployeeSelection
	$employees:=ds:C1482.Employee.all()
	
	var $i : Integer
	$i:=0
	var $info : Object
	While ($i<10)
		$exhibitor:=ds:C1482.Exhibitor.new()
		$exhibitor.employee:=$employees.at((Random:C100%($employees.length)))
		$exhibitor.stand:=$stands.at((Random:C100%($stands.length)))
		$info:=$exhibitor.save()
		$i:=$i+1
	End while 
	
Function newEventActor()
	var $eventActor : cs:C1710.EventActorEntity
	
	var $events : cs:C1710.EventSelection
	$events:=ds:C1482.Event.all()
	var $event : cs:C1710.EventEntity
	
	var $employees : cs:C1710.EmployeeSelection
	$employees:=ds:C1482.Employee.all()
	
	var $i : Integer
	$i:=0
	var $info : Object
	
	If ($employees.length#0)
		For each ($event; $events)
			$eventActor:=ds:C1482.EventActor.new()
			$eventActor.employee:=$employees.at((Random:C100%($employees.length)))
			$eventActor.event:=$event
			$eventActor.biography:="I'm "+String:C10($eventActor.employee.firstName)+" "+String:C10($eventActor.employee.lastName)+", and I work at "+String:C10($eventActor.employee.company.name)+". Today, i will accompany you throughout this event."
			$info:=$eventActor.save()
		End for each 
	End if 
	
	
Function newSponsor()
	var $sponsor : cs:C1710.SponsorEntity
	
	var $events : cs:C1710.EventSelection
	$events:=ds:C1482.Event.all()
	
	var $companies : cs:C1710.CompanySelection
	$companies:=ds:C1482.Company.all()
	
	var $kinds : Collection
	$kinds:=["Financial Sponsorship"; "In-kind Sponsorships"; "Media Event Sponsorship"; "Influencer and Content Creator Sponsorship"]
	
	var $i : Integer
	$i:=0
	var $info : Object
	While ($i<30)
		$sponsor:=ds:C1482.Sponsor.new()
		$sponsor.kind:=$kinds.at((Random:C100%($kinds.length)))
		$sponsor.moreInfo:={contact: "1-408-557-4600"}
		$sponsor.price:=100+$i*100
		$sponsor.event:=$events.at((Random:C100%($events.length)))
		$sponsor.company:=$companies.at((Random:C100%($companies.length)))
		$info:=$sponsor.save()
		$i:=$i+1
	End while 
	
	
Function generateData()
	This:C1470.newEvent()
	This:C1470.newLanguage()
	This:C1470.newSessionType()
	This:C1470.newRoom()
	This:C1470.newSession()
	This:C1470.newEquipement()
	This:C1470.newCompany()
	This:C1470.newEmployee()
	This:C1470.newSpeaker()
	This:C1470.newTechnician()
	This:C1470.newAttendee()
	This:C1470.newEventActor()
	This:C1470.newInscriptionType()
	This:C1470.newInscription()
	This:C1470.newStand()
	This:C1470.newExhibitor()
	This:C1470.newSponsor()
	
	
Function clearData()
	var $toBeDeleted : Object
	var $events : cs:C1710.EventSelection:=ds:C1482.Event.all()
	var $languages : cs:C1710.LanguageSelection:=ds:C1482.Language.all()
	var $sessionTypes : cs:C1710.SessionTypeSelection:=ds:C1482.SessionType.all()
	var $rooms : cs:C1710.RoomSelection:=ds:C1482.Room.all()
	var $sessions : cs:C1710.SessionSelection:=ds:C1482.Session.all()
	var $equipments : cs:C1710.EquipmentSelection:=ds:C1482.Equipment.all()
	var $companies : cs:C1710.CompanySelection:=ds:C1482.Company.all()
	var $employees : cs:C1710.EmployeeSelection:=ds:C1482.Employee.all()
	var $speakers : cs:C1710.SpeakerSelection:=ds:C1482.Speaker.all()
	var $technicians : cs:C1710.TechnicianSelection:=ds:C1482.Technician.all()
	var $attendees : cs:C1710.AttendeSelection:=ds:C1482.Attende.all()
	var $eventActors : cs:C1710.EventActorSelection:=ds:C1482.EventActor.all()
	var $inscriptionTypes : cs:C1710.InscriptionTypeSelection:=ds:C1482.InscriptionType.all()
	var $inscriptions : cs:C1710.InscriptionSelection:=ds:C1482.Inscription.all()
	var $stands : cs:C1710.StandSelection:=ds:C1482.Stand.all()
	var $exhibitors : cs:C1710.ExhibitorSelection:=ds:C1482.Exhibitor.all()
	var $sponsors : cs:C1710.SponsorSelection:=ds:C1482.Sponsor.all()
	
	If ($events.length#0)
		$toBeDeleted:=$events.drop()
	End if 
	If ($languages.length#0)
		$toBeDeleted:=$languages.drop()
	End if 
	If ($sessionTypes.length#0)
		$toBeDeleted:=$sessionTypes.drop()
	End if 
	If ($rooms.length#0)
		$toBeDeleted:=$rooms.drop()
	End if 
	If ($sessions.length#0)
		$toBeDeleted:=$sessions.drop()
	End if 
	If ($equipments.length#0)
		$toBeDeleted:=$equipments.drop()
	End if 
	If ($companies.length#0)
		$toBeDeleted:=$companies.drop()
	End if 
	If ($employees.length#0)
		$toBeDeleted:=$employees.drop()
	End if 
	If ($attendees.length#0)
		$toBeDeleted:=$attendees.drop()
	End if 
	If ($technicians.length#0)
		$toBeDeleted:=$technicians.drop()
	End if 
	If ($speakers.length#0)
		$toBeDeleted:=$speakers.drop()
	End if 
	If ($eventActors.length#0)
		$toBeDeleted:=$eventActors.drop()
	End if 
	If ($inscriptionTypes.length#0)
		$toBeDeleted:=$inscriptionTypes.drop()
	End if 
	If ($inscriptions.length#0)
		$toBeDeleted:=$inscriptions.drop()
	End if 
	If ($stands.length#0)
		$toBeDeleted:=$stands.drop()
	End if 
	If ($exhibitors.length#0)
		$toBeDeleted:=$exhibitors.drop()
	End if 
	If ($sponsors.length#0)
		$toBeDeleted:=$sponsors.drop()
	End if 
	
	
Function clearevents()
	var $deleted : Object
	$deleted:=ds:C1482.Event.all().drop()