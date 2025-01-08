fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const task = JSON.parse(data);
    console.log('Task title:', task.title);
    task.status = "completed"; 
    const updatedJsonString = JSON.stringify(task, null, 2);
    fs.writeFile('tasks.json', updatedJsonString, (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
        } else {
            console.log('File successfully updated!');
        }
    });
});
