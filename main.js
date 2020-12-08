async function queryRepo() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const token = document.getElementById('token').value;
    if (username === '' || token === '') {
        alert("user/token not entered")
        return false;
    }

    let url;
    if (repo === '')
        url = 'https://api.github.com/users/' + username; // get user
    else
        url = 'https://api.github.com/repos/' + username + '/' + repo // get repo

    let result = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'token ' + token
        }
    }).then(result=>result.json());
    document.write(JSON.stringify(result));
    return true;
}