"use strict";

// app obj

var app = {
  title: "My Indecision",
  subTitle: "react is cool",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    console.log(option);
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var reset = function reset() {
  app.options = [];
  renderApp();
};

var appRoot = document.getElementById("app");

var renderApp = function renderApp() {
  //JSX - JavaScript XML 
  var template = React.createElement(
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
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here Are your options" : 'No Options'
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "RemoveAll"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option, index) {
        console.log(index);
        return React.createElement(
          "li",
          { key: index },
          "  ",
          option,
          "  "
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        { type: "submit" },
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
