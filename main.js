var req = new XMLHttpRequest();
req.open('GET', 'https://api.github.com/users/euanleith/repos', false);
req.send(null);
document.write(req.responseText);