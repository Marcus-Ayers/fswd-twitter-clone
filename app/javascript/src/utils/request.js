import { handleErrors, safeCredentials, safeCredentialsFormData } from "./fetchHelper";

function Request() {
  this.type = '';
  this.url = '';
  this.data = {};
  this.dataType = 'json';
  this.success = function(response){
  }
  this.error = function(response){
  }
};

export function createUser(username, email, password, successCB) {
  fetch('/api/users', safeCredentials({
    method: 'POST',
    body: JSON.stringify({
      user: {
        username: username,
        email: email,
        password: password
      }
    })
  }))
  .then(handleErrors)
  .then(successCB)
}

export function signInUser(username, password, successCB) {
  fetch('/api/sessions', safeCredentials({
    method: 'POST',
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      }
    })
  }))
  .then(handleErrors)
  .then(successCB)
}


export function logoutUser(successCB) {
  fetch('/api/sessions', safeCredentials({
    method: 'DELETE',
  }))
  .then(handleErrors)
  .then(successCB)
}


export function authenticate(successCB) {
  fetch('/api/authenticated', {
    method: 'GET',
  })
  .then(handleErrors)
  .then(successCB)
}

export function postTweet(msg, img, successCB) {
  var formData = new FormData();

  if (msg) {
    formData.append('tweet[message]', msg);
  }

  if (img) {
    formData.append('tweet[image]', img, img.name);
  }

  fetch('/api/tweets', safeCredentialsFormData({
    method: 'POST',
    body: formData
  }))
  .then(handleErrors)
  .then(successCB)
}

export function getAllTweets(successCB) {
  fetch('/api/tweets', {
    method: 'GET',
  })
  .then(handleErrors)
  .then(successCB)
}

export function getOneTweets(id, successCB) {
  fetch('/api/tweets/' + id, {
    method: 'GET',
  })
  .then(handleErrors)
  .then(successCB)
}

export function getUserTweets(username, successCB) {
  fetch('/api/users/' + username + '/tweets', {
    method: 'GET',
  })
  .then(handleErrors)
  .then(successCB)
}

export function deleteOneTweet(id, successCB) {
  fetch('/api/tweets/' + id, safeCredentials({
    method: 'DELETE'
  }))
  .then(handleErrors)
  .then(successCB)
}

export function searchTweets(keyword, successCB) {
  fetch('/api/tweets/search/' + keyword, {
    method: 'GET',
  })
  .then(handleErrors)
  .then(successCB)
}
