import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add an option to get started</p>}
      {
        props.options.map((option, index) => {
        return <Option optionText={option} key={index} 
               handelDeleteOption = {props.handelDeleteOption}
        />
        })
      }
    </div>
);

export default Options;
