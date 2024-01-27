const lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last modified: " + lastModifiedDate.toDateString();
