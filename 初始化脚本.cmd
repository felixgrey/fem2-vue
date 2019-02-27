::  Get-ChildItem -Recurse -include  package.json
echo powershell.exe -NoExit  -Command "cd %~dp0 | powershell.exe -NoExit  -Command npm start" > ÔËĞĞnpmStart.cmd