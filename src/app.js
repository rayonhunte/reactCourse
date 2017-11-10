// app obj

const app = {
  title: "My Indecision",
  subTitle: "react is cool",
  options: ['One', 'Two']
}



//JSX - JavaScript XML 
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    {app.options ? <p>Here are your options</p> : <p>No Options</p>}
    <ol>
      <li>1</li>
      <li>2</li>
    </ol>
  </div>);


const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);