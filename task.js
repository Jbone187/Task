//Nodejs task scheduler that run .bat files

const cron = require('node-cron');
const exec = require('child_process').execFile;

cron.schedule('1 * * * * *', function () {
      //Add Time above
    let spawn = require('child_process').spawn,
        ls = spawn('cmd.exe', ['/c', 'test.bat']);

    ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
    });
});