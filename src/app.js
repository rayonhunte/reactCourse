console.log("App.js is running");


// app obj

const app = {
  title: "My Indecision",
  subTitle: "react is cool",
  options: ['One','Two'] 
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

const user = {
  name: 'Rayon',
  age: '35',
  location: 'Guyana'
}

const userName = "mike";
const userAge = "26";
const userLocation = "Guyana";

function getLocation(userLocation){
  if (userLocation){
    return <p>Location: {userLocation}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Not Logged in'}</h1>
    {(user.age >= 18 && <p>Age: {user.age}</p>) && (<p>Age: {user.age}</p>)}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);