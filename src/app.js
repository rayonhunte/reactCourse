class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleOption = this.handleOption.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing Three']
    }
  }
  handleDeleteOptions(){
    this.setState(()=>{
      return {
        options: []
      }
    })
  }
  handlePick() {
      const ranNum = Math.floor(Math.random() * this.state.options.length)
      alert(this.state.options[ranNum]);
  }
  handleOption(option){
    console.log(option)
    if(!option){
      return "Enter A Vaild Option !!!"
    }else if (this.state.options.indexOf(option)> -1){
      return "Option Already exists"
    }
    this.setState((prevState)=>{
      return  {
        options: prevState.options.concat(option)
      }
    })
  }
  render(){
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer?'
    return (
      <div>
        <Header  title={title} subtitle={subtitle}/>
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick = {this.handlePick}
        />
        <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption  
        options={this.state.options}
        handleAddOption = {this.handleOption}
        />
      </div>
    );
  }
}




class AddOption extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(()=>{
      return {
        error
      }
    })
  }
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const Header = (props)=>{
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );

}

const Action = (props) =>{
  return(
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What Should I DO !!!
      </button>
    </div>
  );
}
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option, index) => {
        return <Option optionText={option} key={index} />
        })
      }
    </div>
  );
}

const Option = (props) =>{
  return (
    <div>
      {props.optionText}
    </div>
  );
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))