var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/euanleith/A2Lab2', false);
request.setRequestHeader('Authorization', 'token f44d320bc3eaa1481689ed90bb1a7e9cb3ea4d76');
request.send();
document.write(request.responseText);

//token: f44d320bc3eaa1481689ed90bb1a7e9cb3ea4d76