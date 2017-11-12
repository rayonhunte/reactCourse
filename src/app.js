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
        <AddOption />
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
  render(){
    return(
      <div>
        <button>What Should I Do</button>
      </div>
    ) 
  }
}

class Options  extends React.Component {
  render(){
    return (
      <div>
        <p>Options Go Here</p>
        
        {
          this.props.options.map((option, index)=>{
            return <Option optionText={option} key={index}/>
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
  render(){
    return (
      <div>
        <p>AddOption Component here</p>
      </div>
    );
  }
}




ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))