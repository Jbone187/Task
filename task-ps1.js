const shell = require('node-powershell');
const cron = require('node-cron'); 
const winston = require('winston');
const moment = require('moment');
const time = () => moment().format('YYYY-MM-DD hh:mm:ss').trim();


winston.add(winston.transports.File, { filename: 'taskps1.log', timestamp: time });
//Task Scheduler
cron.schedule('* * * * *', function () {

let ps = new shell({
  executionPolicy: 'Bypass',
  noProfile: true
});
//Run PowerShell Script
ps.addCommand('Add ps1')

ps.invoke()
.then(output => {
 console.log(output);
  })
.catch(err => {
  console.log(err);
  ps.dispose
});
 //Logging
winston.log('info', 'Process Ran');
});
