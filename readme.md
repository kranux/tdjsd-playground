Implementing simple data structures and algorithms with JavaScript while reading "Test-Driven JavaScript Development" by Christian Johansen.

Use js-test-driver for xUnit style tests.

Download https://code.google.com/p/js-test-driver/downloads/list

set environment variable JSTESTDRIVER_HOME=c:\bin

start test server:
>java -jar %JSTESTDRIVER_HOME%/JsTestDriver-1.3.5.jar --port 4224

navigate to http://localhost:4224/
click on Capture This Browser

run all tests in current dir:
java -jar %JSTESTDRIVER_HOME%/JsTestDriver-1.3.5.jar --tests all

config file jstestdriver.conf in YAML format:

===start of file
server: http://localhost:4224

load:
- src/*.js
- test/*.js

endoffile====