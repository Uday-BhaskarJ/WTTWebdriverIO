# WTTWebdriverIO

Steps to Understand the Webdriverio Framework and Work Accordingly

1.	Install Nodejs latest Version in your Machine
2.	Install Visual Studio Code in your Machine
3.	Import the project Framework into Visual Studio Code.
4.	Go to Terminal and select the folder webdriverioFramework/	
5.	Enter the command----- npm init for generating package.json file
6.	Enter the command------npm init wdio ---for installing webdriverio and while selecting the reports select (allure reports)
7.	To run all the tests enter the command ------ npx wdio run .\wdio.conf.js  
8.	To run specific tests enter the command------ npx wdio --spec ./test\specs\main.e2e.js    
9.	To generate allure reports enter the command ----- npm install @wdio/allure-reporter --save-dev 
10.	Enter the command -------npm i allure-commandline -g  
11.	Enter the command ------- npx allure generate allure-results  
12.	Enter the command -------- npx allure open
13.	To clean the allure reports enter the command ------- npx allure generate allure-results  --clean
