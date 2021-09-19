import React, {Component} from 'react'
import DopComponent from '../components/index.js'
import Button from '@material-ui/core/Button'
import '../../App.css';
import Rating from '@material-ui/lab/Rating';



class DopContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:1
    }
  }
incrementCount=()=>{
  this.setState({count: this.state.count+1});
}
decrementCount=()=>{
  this.setState({count: this.state.count-1});
}
  render(){
    const name = 'Alina';
    const { count } = this.state
    return ( <DopComponent 
    helloText = {"My name is " + name}
    incrementClick = {this.incrementCount}
    incrementClickTwo= {this.decrementCount}
    count = {count}
   />
    )
  }
}

export default DopContainer;