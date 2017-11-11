const appRoot = document.getElementById("app");

const app = {
  title: "Visibility Toggle",
  status: true
}


const toggleShow = ()=>{
  // if(app.status){
  //   app.status = false;
  // }else{
  //   app.status = true;
  // }
  // a better toggle switch
  app.status = !app.status;
  renderApp();
  console.log(app.status);
}



const renderApp = () =>{

var template = (
  <div>
    <h1>{app.status && app.title}</h1>
    <button onClick={toggleShow}>
      {app.status ? 'Hide Details' : 'Show Details'}
    </button>
  </div>
);

ReactDOM.render(template, appRoot);
}


renderApp();

