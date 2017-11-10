let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count --;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}



const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button className="button" onClick={addOne}>+1</button>
      <button className="button" onClick={minusOne}>-1</button>
      <button className="button" onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
}


renderCounterApp();