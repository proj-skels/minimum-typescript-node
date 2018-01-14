const { spawn } = require('child_process');

const spawnOpts = {
    stdio: [ 'inherit', 'inherit', 'inherit' ],
    shell: true
};

const commands = [
    'npm i', // Install shx for init scripts
    'npm run delete.git',
    'npm run delete.readme',
    'npm run create.readme',
    'npm init',
    'node tasks/setupProjectFiles.js',
    'cp tasks/assets/.gitignore ./',
    'cp tasks/assets/tsconfig.json ./',
    'npm i', // Install initial project deps
    'git init',
    'git add .',
    'git commit -m "Initial commit."'
]

function parseCommand(commandString) {
    let parts = commandString.split(' ');

    let cmd = {}
    let strCandidate = [];
    for( var i = 0; i < parts.length; i++ ) {
        if ( i == 0 ) {
            cmd.$0 = parts[i];
            cmd.args = []
        }
        else {
            if ( parts[i].startsWith('"') ) {
                strCandidate.push(parts[i]);
            }
            else if ( parts[i].endsWith('"') ) {
                strCandidate.push(parts[i]);
                let str = strCandidate.join(' ');
                cmd.args.push(''+str);
                strCandidate = [];
            }
            else if ( strCandidate.length > 0 ) {
                strCandidate.push(parts[i]);
            }
            else {
                cmd.args.push(parts[i]);
            }
            
        }
    }
    // console.log( cmd );
    return cmd;
}

function doCommand(i) {
    if ( commands.length > i ) {
        let cmd = parseCommand(commands[i]);
        let child = spawn(cmd.$0,cmd.args,spawnOpts);
        child.on('close', (code) => {
            // console.log('Exit code: ', code);
            if ( code === 0 ) {
                doCommand(i+1);
            }
        });
    }
}

doCommand(0);
