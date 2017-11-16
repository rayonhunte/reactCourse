import React from 'react';
const Option = (props) =>(
    <div>
      {props.optionText} 
      <button onClick={
        (e)=>{
          props.handelDeleteOption(props.optionText)
        }}>
        Delete Option
      </button>
    </div>
);

export default Option;