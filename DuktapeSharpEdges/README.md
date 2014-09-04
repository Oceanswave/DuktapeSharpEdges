# DuktapeSharpEdges


To get this example running, perform the following tasks

1. Install Chocolatey (Required to install stuff quickly)

  At an elevated command prompt, run

  ```
  @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
  ```

2. Install Node.js via Chocolatey (Required for node,npm, all the things)

  At an elevated command prompt, run

  ```
  choco install nodejs.install
  ```

3. Install Python 2.x.x via Chocolately (required to build duktape)

  At an elevated command prompt, run

  ```
  choco install python2
  ```

4. Install npm packages -- this must be run at the command line as it requires that python is available on the path...

  At an elevated command prompt, in the same folder as the DuktapeSharpEdges project, run

  ```
  npm install duktape
  ```

  ```
  npm install edge
  ```