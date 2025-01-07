const fs = require('fs');
const myTask = {
    title: 'learn Deutsch',
    dueDate: "25.01",
    status: "pending"
};
const jsonString = JSON.stringify(myTask, null, 2); 

fs.writeFile('tasks.json', jsonString, (err) => {
    if (err) {
        console.log('Error writing file', err);
    } else {
        console.log('File saved successfully as tasks.json');
    }
});
