let d = new Date();
document.querySelector("#copyright").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastmodified').textContent = `Last Modification: ${document.lastModified}`;