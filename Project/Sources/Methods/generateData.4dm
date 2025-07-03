//%attributes = {}

var $dataGen : cs:C1710.fakeData
$dataGen:=cs:C1710.fakeData.new()
$dataGen.clearData()
$dataGen.generateData()
ALERT:C41("Data generated!")