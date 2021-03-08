const authTokenRequest = {
  url: 'https://' + pm.environment.get('domain') + '/authToken',
  method: 'POST',
  header: 'Content-Type:application/json',
  body: {
    mode: 'application/json',
    raw: JSON.stringify({
      username: pm.environment.get('username'),
      password: pm.environment.get('password')
    })
  }
};

pm.sendRequest(authTokenRequest, function (err, res) {
  console.log(err ? err : res.json());

  if (err === null) {
    var response = res.json();

    pm.environment.set('token', response.token)
  }
});