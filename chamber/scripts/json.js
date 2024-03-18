const fs = require('fs');

// Read the members.json file
fs.readFile('/z:/wdd231/chamber/data/members.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Parse the JSON data
    const members = JSON.parse(data);

    // Display the members on the directory.html page
    const directoryElement = document.getElementById('directory');
    directoryElement.innerHTML = JSON.stringify(members);
});