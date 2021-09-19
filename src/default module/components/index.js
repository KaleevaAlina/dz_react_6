import logo from '../../logo.svg';
import '../../App.css';
import { Button } from '@material-ui/core';



 
const DopComponent = ({helloText,incrementClick,count,  incrementClickTwo}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {helloText}
        </p>
        <a
          className="App-link"

          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
   
        <div className="but">
          <Button variant="outlined" color="secondary" onClick = {incrementClick}>PLUS </Button>
          <Button variant="outlined" color="secondary" onClick = {incrementClickTwo}>Minus</Button>
        </div>
        <div className="but1">
          {count}
        </div>
      </header>
    <div>
    
</div>
</div>
  );
}

export default DopComponent;