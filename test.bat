@echo off 
@REM test itSkills ItSkills
set servicename1=%1
set servicename2=%2
echo %servicename1%
echo %servicename2%

git clone -b nanda https://developerNanda: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@github.com/developerNanda/sampleMicroService.git
@REM git clone -b nanda https://github.com/developerNanda/sampleMicroService.git
echo "cloned repo"

call .\replace.bat ./sampleMicroService/src/testRoute.js "test" %servicename1%
call .\replace.bat ./sampleMicroService/src/testRoute.js "Test" %servicename2%
echo "route created"
call .\replace.bat ./sampleMicroService/src/testModel.js "test" %servicename1%
call .\replace.bat ./sampleMicroService/src/testModel.js "Test" %servicename2%
echo "model created"
call .\replace.bat ./sampleMicroService/src/testCtrl.js "test" %servicename1%
call .\replace.bat ./sampleMicroService/src/testCtrl.js "Test" %servicename2%
echo "control created"

call .\replace.bat ./sampleMicroService/server.js "test" %servicename1%
echo "server Created"

cd ./sampleMicroService/src/
RENAME "testRoute.js" "%servicename1%Route.js"
ren "testModel.js" "%servicename1%Model.js"
ren "testCtrl.js" "%servicename1%Ctrl.js"

@REM cd ../
@REM ren "src" "%servicename1%"
@REM cd ../
@REM ren "sampleMicroService" "%servicename1%Service"

@REM (Get-Content ./sampleMicroService/src/testRoute.js) -replace 'test', 'Account' | Out-File -encoding ASCII Acoount.js
