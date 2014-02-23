Implementing simple data structures and algorithms with JavaScript while reading "Test-Driven JavaScript Development" by Christian Johansen.

Use js-test-driver for xUnit style tests.

Download <a href="https://code.google.com/p/js-test-driver/downloads/list" target="_blank>https://code.google.com/p/js-test-driver/downloads/list</a>

## Setup instructions

### MS Windows

set environment variable JSTESTDRIVER_HOME=c:\bin

### (Ubuntu) Linux:

add to .bashrc:

<pre>export JSTESTDRIVER_HOME=~/bin</pre>

## Starting test server

1) start command from shell:

### MS Windows

<pre>
> java -jar %JSTESTDRIVER_HOME%/JsTestDriver-1.3.5.jar --port 4224
</pre>

### Linux
<pre>java -jar $JSTESTDRIVER_HOME/JsTestDriver-1.3.5.jar --port 4224</pre>

2) In browsers you want to run tests navigate to <a href="http://localhost:4224/">http://localhost:4224/</a>
3) When page loads click on "Capture This Browser"

## Running tests
1) Navigate to source directory

2) Run command in shell:

### MS Windows

<pre>
> java -jar %JSTESTDRIVER_HOME%/JsTestDriver-1.3.5.jar --tests all
</pre>

### Linux
java -jar $JSTESTDRIVER_HOME/JsTestDriver-1.3.5.jar --tests all


## Configuration
config file jsTestDriver.conf (case sensitive name!) in YAML format:

<pre>
server: http://localhost:4224

load:
- src/*.js
- test/*.js
</pre>