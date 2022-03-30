# Client Auth Module Project: Auth Friends

This module explored the clients-side authentication using auth-tokens. During the module you studied how the login, request and logout process works when using authentication and how to restrict access to certain route to logged in users. IN this project, you will practice each of these skills.

## Objectives

- Understand how token based authentication works
- Setup a login screen and successfully save an auth token.
- Use an auth token to make requests.

## Introduction

In this project, you will connect to a local server with endpoints allowing you to work with interact with data from the cast of Friends. Using this data as a base, you will build functioning login, display and add component pages to your application.

The included API holds a list of friends and lets you add, edit, or remove friends from that list. All of the API endpoints (except the login endpoint) are considered "protected", meaning you have to make the request with an authentication token in the header or the API will send back a `401` error. Take a look at the endpoints that our API has to offer in `http://localhost:9000`.

- **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Bloom', password: 'Tech' }`
- **[POST]** * to `/api/logout`: removes a token from active use. Returns the inactive token.
- **[GET]** to `/api/friends`: returns the list of friends.
- **[GET]** to `/api/friends/123`: returns the friend with the id passed as part of the URL (123 in example).
- **[POST]** * to `/api/friends`: Adds in a new friend.

Each friend object has the format:

```js
{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@lambdaschool.com',
}
```

***Make sure to complete your tasks one at a time and complete test each task before proceding forward.***

## Instructions

#### Build the login component


#### Build the addFriends component

* [ ] When submitting the form, make a call to the approprate api endpoint with your new friend data. Remember that this is a protected route.
* [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/friends/add`.

#### Build a logout button

* [ ] Build out a simple component allowing you to logout of your application cleanly.
* [ ] The component should make a call to the logout endpoint and remove the token on local storage by default.
* [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/logout`.
* [ ] In `App.js`, create a navigation bar that allows the user to redirect to logout, friendslist or add friend.

#### Protect the /friends and /friends/add routes

* [ ] Redirect the user to your login route if there is not a token in local storage.