const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const dir = path.join(__dirname);

fs.readdir(dir, (err, files) => {
    files.forEach(file => {
    
    
        if (!fs.lstatSync(path.join(dir, file)).isDirectory()) {
            return;
        }
        
        const packageDir = path.join(dir, file);
        
        
        exec(`cd ${packageDir} && npm version patch && npm publish`, (err, stdout, stderr) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(stdout);
        });
    });
    
})
