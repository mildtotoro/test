import React, { Component } from 'react';

class ListValue extends Component {

   findXYZ = (amount = 7) => {
    let result = [];
    let number = 3;
    for (let i = 0; i <= amount; i++) {
      number = number + (2*i);
      result.push(number);
    }
  
    return result.map(n => {
      return n+","
    })
  }

  render () {
    return <div className="container h-75">
   {this.findXYZ()}
    </div>
  }
}

export default ListValue;
