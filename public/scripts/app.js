"use strict";

var appRoot = document.getElementById("app");

var app = {
  title: "Visibility Toggle",
  status: true
};

var toggleShow = function toggleShow() {
  // if(app.status){
  //   app.status = false;
  // }else{
  //   app.status = true;
  // }
  // a better toggle switch
  app.status = !app.status;
  renderApp();
  console.log(app.status);
};

var renderApp = function renderApp() {

  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.status && app.title
    ),
    React.createElement(
      "button",
      { onClick: toggleShow },
      app.status ? 'Hide Details' : 'Show Details'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
