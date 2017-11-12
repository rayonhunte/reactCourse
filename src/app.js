class IndecisionApp extends React.Component {
  render(){
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer?'
    const options = ['Thing one', 'Thing two', 'Thing Three']
    return (
      <div>
        <Header  title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption  options={options}/>
      </div>
    );
  }
}


class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick(){
    console.log("check this out")
  }
  render(){
    return(
      <div>
        <button onClick={this.handlePick}>What Should I Do</button>
      </div>
    ) 
  }
}

class Options extends React.Component {
  // bind event handlers
  constructor(props){
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  
  
  handleRemoveAll() {
    console.log("remove them all")
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option, index) => {
            return <Option optionText={option} key={index} />
          })
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render(){
    return (
      <div>
        {console.log(this.props.optionText)}
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
      console.log(this.props.options.push(option))
    }
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}




ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))