import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  }

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}))
  }

  handelDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState
        .options
        .filter((option) => optionToRemove !== option)
    }))
  }

  handlePick = () => {
    const ranNum = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[ranNum]);
  }

  handleOption = (option) => {
    if (!option) {
      return "Enter A Vaild Option !!!"
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option Already exists"
    }
    this.setState((prevState) => ({
      options: prevState
        .options
        .concat(option)
    }))
  }

  //life cycle
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options}))
      }
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer?'
    return (
      <div>
        <Header subtitle={subtitle} title={'Indecision App'}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}/>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handelDeleteOption={this.handelDeleteOption}/>
        <AddOption options={this.state.options} handleAddOption={this.handleOption}/>
      </div>
    );
  }
}