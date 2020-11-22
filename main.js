function queryRepo() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const token = document.getElementById('token').value;
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/repos/' + username + '/' + repo, false);
    request.setRequestHeader('Authorization', 'token ' + token);
    request.send();
    document.write(request.responseText);
}