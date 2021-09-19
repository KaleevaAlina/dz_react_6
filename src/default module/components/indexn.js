
import '../../App.css';
import { Button } from '@material-ui/core';


const DopComponentn = ({multiply,countn,divide}) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="but">
          <Button variant="outlined" color="secondary" onClick = {multiply}>* </Button>
          <Button variant="outlined" color="secondary" onClick = {divide}>/</Button>
        </div>
        <div className="but1">
          {countn}
        </div>
      </header>
    <div>
</div>
</div>
  );
}

export default DopComponentn;