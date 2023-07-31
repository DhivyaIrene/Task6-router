import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './home.css';
class Kdapph extends Component{
  render(){
    return(
    <div>
      <div className='heading'>
        <h1 className='logtxt'>SHOP WITH US</h1>
        <img className='logo' src='https://tse4.mm.bing.net/th?id=OIP.BhBJ4FiVQBmQWlLmcpl8gwHaIZ&pid=Api&P=0&h=180'/>
      </div>
      <div className='cont'>
        <img className='bodyimg' src='https://tse4.mm.bing.net/th?id=OIP.qLx_27fA6CEA1VWbJs6IvgHaCe&pid=Api&P=0&h=180'/>
      </div>
    </div>
    );
  }
}
export default Kdapph;
// ReactDOM.render(Kdapph,document.getElementById("root"));