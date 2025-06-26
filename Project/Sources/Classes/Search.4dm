Class constructor
	This:C1470.searchbox:=""
	This:C1470.queryString:=""
	This:C1470.querySettings:={}
	This:C1470.querySettings.parameters:={}
	This:C1470.querySettings.attributes:={}
	This:C1470.querySettings.queryPlan:=True:C214
	This:C1470.querySettings.queryPath:=True:C214
	
	//MARK:-Analyse the search box
Function _cleanSearchbox()  //to remove useless spaces in content of the searchbox 
	This:C1470.searchbox:=Split string:C1554(This:C1470.searchbox; " ").join(" "; ck ignore null or empty:K85:5)
	
	
	//MARK:-Build a list of criteria
Function _splitSearchboxInParts()
	
	var $rawSearchbox : Text  //the contents of the search box ready to be eaten $character by $character
	var $currentValue : Text  //the currentPart build char by char
	var $character : Text  //the current char to analyze
	var $positionNext : Integer  //where is the next char to be process
	var $inDoubleQuotes : Boolean  //to know if we are currently in a double quotes or not
	var $potentialTag : Text  //this value contain the name of the tag; if exist
	var $part : Object
	var $indices : Collection
	
	This:C1470.queryParts:=[]
	$rawSearchbox:=This:C1470.searchbox
	
	$currentValue:=""
	$inDoubleQuotes:=False:C215
	This:C1470.tagToAdd:=""
	While ($rawSearchbox#"")
		$character:=$rawSearchbox[[1]]
		$positionNext:=2
		Case of 
			: (($rawSearchbox="AND @") || ($rawSearchbox="AND(@")) & Not:C34($inDoubleQuotes)
				If (This:C1470.queryParts.length=0)
					This:C1470._pushCurrentValueInParts("and")
					$currentValue:=""
				Else 
					$part:={}
					$part.type:="operator"
					$part.value:="AND"
					This:C1470.queryParts.push($part)
				End if 
				$positionNext:=($rawSearchbox="AND @") ? 5 : 4
			: (($rawSearchbox="OR @") || ($rawSearchbox="OR(@")) & Not:C34($inDoubleQuotes)
				If (This:C1470.queryParts.length=0)
					This:C1470._pushCurrentValueInParts("or")
					$currentValue:=""
				Else 
					$part:={}
					$part.type:="operator"
					$part.value:="OR"
					This:C1470.queryParts.push($part)
				End if 
				$positionNext:=($rawSearchbox="AND @") ? 4 : 3
			: ($rawSearchbox="\\s@")
				$currentValue+=" "
				$positionNext:=3
			: (($character="(") || ($character=")")) & Not:C34($inDoubleQuotes)
				This:C1470._pushCurrentValueInParts($currentValue)
				$currentValue:=""
				$part:={}
				$part.type:="parenthesis"
				$part.value:=$character
				This:C1470.queryParts.push($part)
			: ($character="\"")
				This:C1470._pushCurrentValueInParts($currentValue)
				$currentValue:=""
				$inDoubleQuotes:=Not:C34($inDoubleQuotes)
			: ($character=" ") & Not:C34($inDoubleQuotes)
				This:C1470._pushCurrentValueInParts($currentValue)
				$currentValue:=""
			: ($character=":") & Not:C34($inDoubleQuotes)
				$potentialTag:=$currentValue
				$indices:=This:C1470.entry.searchField.indices("tag = :1 or tags[] = :1"; $potentialTag)
				If ($indices.length>0)
					This:C1470.tagToAdd:=$potentialTag
					$currentValue:=""
				Else 
					$currentValue+=$character
				End if 
			Else 
				$currentValue+=$character
		End case 
		$rawSearchbox:=Substring:C12($rawSearchbox; $positionNext)
	End while 
	This:C1470._pushCurrentValueInParts($currentValue)
	This:C1470._completeImpliciteOperator()
	
	
Function _pushCurrentValueInParts($currentValue : Text)
	
	var $part : 4D:C1709.Object  // TODO : 4D.OBJECT ?
	
	$part:={}
	Case of 
		: ($currentValue="")
		: (This:C1470.tagToAdd#"")
			$part.type:="value"
			$part.tag:=This:C1470.tagToAdd
			$part.value:=$currentValue
			This:C1470.queryParts.push($part)
			This:C1470.tagToAdd:=""
		Else 
			$part.type:="value"
			$part.value:=$currentValue
			This:C1470.queryParts.push($part)
	End case 
	
	
	
	//MARK:-Consolidate the list of criteria	
Function _completeImpliciteOperator()
	
	var $previousPart; $part; $parenthesisPart : Object
	var $queryPartsIN : Collection
	var $nbParentheses; $i : Integer
	
	$queryPartsIN:=This:C1470.queryParts  //  copy the content of the current collection ...
	This:C1470.queryParts:=[]  // ... before reset this collection for a full rebuild
	$previousPart:=Null:C1517
	For each ($part; $queryPartsIN)
		Case of 
			: ($previousPart.type="value") & ($part.type="value")
				This:C1470._pushANDOperator()
			: ($previousPart.type="parenthesis") & ($previousPart.value=")") & ($part.type="value")
				This:C1470._pushANDOperator()
			: ($previousPart.type="parenthesis") & ($previousPart.value=")") & ($part.type="parenthesis") & ($part.value="")
				This:C1470._pushANDOperator()
			: ($previousPart.type="parenthesis") & ($previousPart.value=")") & ($part.type="parenthesis") & ($part.value="(")
				This:C1470._pushANDOperator()
				$nbParentheses+=1
			: ($previousPart.type="value") & ($part.type="parenthesis") & ($part.value="(")
				This:C1470._pushANDOperator()
				$nbParentheses+=1
			: ($part.type="parenthesis") & ($part.value="(")
				nbParentheses+=1
			: ($part.type="parenthesis") & ($part.value=")")
				$nbParentheses-=1
		End case 
		This:C1470.queryParts.push($part)
		$previousPart:=$part
	End for each 
	
	Case of 
		: ($nbParentheses>0)
			For ($i; $nbParentheses; 0; -1)
				$parenthesisPart:={}
				$parenthesisPart.type:="parenthesis"
				$parenthesisPart.value:=")"
				This:C1470.queryParts.push($parenthesisPart)
			End for 
		: ($nbParentheses<0)
			For ($i; $nbParentheses; 0)
				$parenthesisPart:={}
				$parenthesisPart.type:="parenthesis"
				$parenthesisPart.value:="("
				This:C1470.queryParts.unshift($parenthesisPart)
			End for 
	End case 
	
Function _pushANDOperator()
	var $operatorPart : Object
	
	$operatorPart:={}
	$operatorPart.type:="operator"
	$operatorPart.value:="AND"
	This:C1470.queryParts.push($operatorPart)
	
	
	//MARK:-Build the query elements
Function _buildQueryString()
	var $partIndice : Integer
	var $subQueryStringPart : Text
	var $subQueryStringParts; $searchFields : Collection
	var $valueToSearch : Variant
	var $field; $part : Object
	var $parameterName : Text
	
	This:C1470.queryStringParts:=[]
	
	$partIndice:=0
	For each ($part; This:C1470.queryParts)
		
		Case of 
			: ($part.type="value")
				$subQueryStringParts:=[]
				$partIndice+=1
				Case of 
					: ($part.tag#Null:C1517)
						$searchFields:=This:C1470.entry.searchField.query("tag = :1 or tags[] = :1"; $part.tag)
					Else 
						$searchFields:=This:C1470.entry.searchField.query("onlyWithTag = false or onlyWithTag = null")
				End case 
				For each ($field; $searchFields)
					$subQueryStringPart:=""
					$valueToSearch:="@"+$part.value+"@"
					If (Field:C253.placeHolder#Null:C1517)
						$parameterName:=Field:C253.placeHolder+String:C10($partIndice)
						$subQueryStringPart+=Field:C253.path+" = :"+$parameterName
						This:C1470.querySettings.parameters[$parameterName]:=$valueToSearch
					Else 
						$parameterName:=Field:C253.attribute+String:C10($partIndice)
						$subQueryStringPart+=Field:C253.attribute+" = :"+$parameterName
						This:C1470.querySettings.parameters[$parameterName]:=$valueToSearch
					End if 
					$subQueryStringParts.push($subQueryStringPart)
				End for each 
				
				This:C1470.queryStringParts.push("("+$subQueryStringParts.join(" OR ")+")")
				
			: ($part.type="operator")
				This:C1470.queryStringParts.push($part.value)
				
			: ($part.type="parenthesis")
				This:C1470.queryStringParts.push($part.value)
		End case 
		
	End for each 
	This:C1470.queryString:=This:C1470.queryStringParts.join(" ")
	This:C1470.queryString+=(This:C1470.entry.orderByDefault#Null:C1517) ? " order by "+This:C1470.entry.orderByDefault : ""
	
	
	//MARK: -Execute the query
Function perform($entry : Object; $rawSearchbox : Text)->$entitySelection : 4D:C1709.EntitySelection
	This:C1470.entry:=$entry
	This:C1470.searchbox:=$rawSearchbox
	This:C1470._cleanSearchbox()
	If (This:C1470.searchbox="")
		$entitySelection:=This:C1470._all()
	Else 
		$entitySelection:=This:C1470._query()
	End if 
	
Function _all()->$entitySelection : 4D:C1709.EntitySelection
	
	$entitySelection:=ds:C1482[This:C1470.entry.dataclass.name].all()
	If (This:C1470.entry.orderByDefault#Null:C1517)
		$entitySelection:=$entitySelection.orderBy(This:C1470.entry.orderByDefault)
	End if 
	
Function _query()->$entitySelection : 4D:C1709.EntitySelection
	This:C1470._splitSearchboxInParts()
	This:C1470._buildQueryString()
	
	If (This:C1470.queryString="")  //in case of the analyze return a empty string
		$entitySelection:=This:C1470._all()
	Else 
		$entitySelection:=ds:C1482[This:C1470.entry.dataclass.name].query(This:C1470.queryString; This:C1470.querySettings)
	End if 
	
	