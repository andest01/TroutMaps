@echo off
REM For building on a Windows environment
REM This does not require installation of nodejs as a prerequisite

REM OS bit value
set BIT_64=
set BIT_32=32

If Defined ProgramFiles(x86) (
    set BIT=%BIT_64%
) Else (
    set BIT=%BIT_32%
)

REM Node and grunt paths
set NODE=..\bin\windows\node%BIT%.exe
set NPM=..\bin\windows\node_modules\npm\bin\npm-cli.js
set GRUNT=node_modules\grunt-cli\bin\grunt

REM Install dependencies if needed
%NODE% %NPM% install

REM Execute Grunt
%NODE% %GRUNT% %*