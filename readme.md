Implementing simple data structures and algorithms with JavaScript while reading "Test-Driven JavaScript Development" by Christian Johansen.

Use js-test-driver for xUnit style tests.

Download https://code.google.com/p/js-test-driver/downloads/list

Instructions for Windows:

set environment variable JSTESTDRIVER_HOME=c:\bin

start test server:
<pre>
> java -jar %JSTESTDRIVER_HOME%/JsTestDriver-1.3.5.jar --port 4224
</pre>

navigate to <a href=" http://localhost:4224/">http://localhost:4224/</a>
click on Capture This Browser

run all tests in current dir:
<pre>
> java -jar %JSTESTDRIVER_HOME%/JsTestDriver-1.3.5.jar --tests all
</pre>

config file jstestdriver.conf in YAML format:

<pre>
server: http://localhost:4224

load:
- src/*.js
- test/*.js
</pre>