Class extends DataClass

exposed Function saveSearch($search : Variant)
	Use (Session:C1714.storage)
		Session:C1714.storage.searchCompany:=New shared object:C1526("search"; $search)
	End use 
	
exposed Function $search($searchbox : Variant) : cs:C1710.CompanySelection
	
	var $search : cs:C1710.Search
	var $entry : Object
	$searchbox:=($searchbox#Null:C1517) ? $searchbox : ""
	If ($searchbox#"")
		$search:=cs:C1710.Search.new()
		$entry:={dataclass: cs:C1710.Company; searchField: []; orderByDefault: "name"}
		
		$entry.searchField:=[]
		$entry.searchField.push({attribute: "name"; tag: "name"})
		$entry.searchField.push({attribute: "country"; tag: "country"; tags: ["country"; "companyCountry"]; onlyWithTag: True:C214})
		$entry.searchField.push({path: "address.address1"; placeHolder: "address"; tag: "address"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "sponsors.kind"; placeHolder: "sponsor"; tag: "sponsor"; onlyWithTag: True:C214})
		$entry.searchField.push({path: "employees.fullName"; placeHolder: "employee"; tag: "employee"; onlyWithTag: True:C214})
		
		return $search.perform($entry; $searchbox)
	Else 
		return This:C1470.all()
	End if 
	
exposed Function onLoadSearch()->$search : Text
	If (Session:C1714.storage.searchCompany#Null:C1517)
		$search:=Session:C1714.storage.searchCompany.search
	Else 
		$search:=""
	End if 
	
exposed Function selectedElement() : cs:C1710.CompanyEntity
	If (Session:C1714.storage#Null:C1517 && Session:C1714.storage.selectedCompany.UUID#Null:C1517)
		return This:C1470.get(Session:C1714.storage.selectedCompany.UUID)
	Else 
		return This:C1470.all().first()
	End if 
	
	
exposed Function setElement($selCompany : cs:C1710.CompanyEntity)
	Use (Session:C1714.storage)
		Session:C1714.storage.selectedCompany:=New shared object:C1526("UUID"; $selCompany.UUID)
	End use 
	
exposed Function fillLineChart() : Object
	var $lineChart : Object:={}
	var $companies : cs:C1710.CompanySelection:=This:C1470.all()
	var $company : cs:C1710.CompanyEntity
	$lineChart.options:={xaxis: {categories: []}}
	$lineChart.series:=[{name: "Sponsoring"; data: []}; {name: "Stand"; data: []}]
	For each ($company; $companies)
		$lineChart.options.xaxis.categories.push($company.name)
		$lineChart.series[0].data.push($company.sponsors.length)
		$lineChart.series[1].data.push($company.stands.length)
	End for each 
	return $lineChart