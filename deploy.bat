REM ** RECURSIVELY DELETE DOCS FOLDER **
rd /s /q docs
REM ** RECREATE EMPTY DOCS FOLDER **
md docs
REM ** COPY FILES FROM BUILD FOLDER INTO DOCS FOLDER **
xcopy "website/build" "docs" /E
REM ** WAIT FOR USER INPUT **
PAUSE