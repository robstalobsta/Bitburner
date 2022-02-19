# Bitburner
A collection of useful Bitburner scripts.

##### Table of Contents  
[List of Scripts](#list)  
* [Start.js](#start)
* [Scan.js](#scan)
* [Helpers.js](#helpers)
* [findServer.js](#find)
* [contract-auto-solver.js](#solver)
* [solve-contract.js](#solve)
* [stock.js](#stock)
* [sellStocks.js](#sellStock)

## List of Scripts<a name="list"/>

### Start.js<a name="start"/>
Always start with this script.

On startup you probably want to use player server as host. yes/no on hacknet module depending on if you are trying to save money or make money.

You will have a UI box appear after running script. It will show how many servers you have access to (HOSTS) and how many servers you can hack (TARGETS). There is a kill/run button to stop and start the script as needed. Handy for turning on/off the hacknet module.

>run Start.js

### Helpers.js<a name="helpers"/>
A collection of helpful scripts that are utilized by other scripts. No need to run this.

### Scan.js<a name="scan"/>
A scanning script that will pull all servers all layers deep. Click to connect. Click to backdoor. See hacking requirement. See present contracts. Only in my dreams could I write something this beautiful.

>run Scan.js

### findServer.js<a name="find"/>
This script will help you find a particular server.

>run findServer.js <serverName>

### contract-auto-solver.js<a name="solver"/>

This is a script to scan all servers and attempt to solve any present contracts using 'solve-contract.js'. Several modules on 'solve-contract.js' in this are still broken and need to be debugged.

>run contract-auto-solver.js

### solve-contract.js<a name="solve"/>
Collection of scripts used by the above to solve contracts. Do not run.

### stock.js<a name="stock"/>
Only worry about this once you have spent the 26 billion on the stock market appliances and certifications.

Will scan stock market periodically and buy stable stocks with good forecast and will sell at 10% gains. Sells if forecast goes too negative.

>run stocks.js

### sellStocks.js<a name="sellStock"/>
Use this script to sell all your stocks. Kill stocks.js to not buy more stocks.

>run sellStocks.js