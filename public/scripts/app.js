"use strict";

console.log("App.js is running");

// app obj

var app = {
  title: "My Indecision",
  subTitle: "react is cool",
  options: ['One', 'Two']

  //JSX - JavaScript XML 
};var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    "p",
    null,
    app.subTitle
  ),
  app.options ? React.createElement(
    "p",
    null,
    "Here are your options"
  ) : React.createElement(
    "p",
    null,
    "No Options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "1"
    ),
    React.createElement(
      "li",
      null,
      "2"
    )
  )
);

var user = {
  name: 'Rayon',
  age: '35',
  location: 'Guyana'
};

var userName = "mike";
var userAge = "26";
var userLocation = "Guyana";

function getLocation(userLocation) {
  if (userLocation) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      userLocation
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'Not Logged in'
  ),
  user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ) && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
