"use strict";

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

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
