import React, {Component} from 'react'
import DopComponentn from '../components/indexn.js'
import Button from '@material-ui/core/Button'
import '../../App.css';
import Rating from '@material-ui/lab/Rating';



class DopContainern extends Component {
  constructor(props){
    super(props)
    this.state = {
      countn:1
    }
  }
  multiply=()=>{
  this.setState({countn: this.state.countn*4});
}
  divide=()=>{
  this.setState({countn: this.state.countn/4});
}
  render(){
    const name = 'Alina';
    const { countn } = this.state
    return ( <DopComponentn 
    multiply = {this.multiply }
    divide= {this.divide}
    countn = {countn}
   />
    )
  }
}

export default DopContainern;