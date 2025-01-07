const fs = require('fs');
fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    const jsObject = JSON.parse(data);
    console.log(jsObject);
});

