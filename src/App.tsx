import React from 'react';
import logo from './logo.svg';
import './App.css';
import JavaPage from './JavaPage';

interface Props{
  // clickHere : (page:string)=>void;
}
class App extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={

    }
  }

  clickHere = (page:String) =>{
    console.log('asd');
    console.log(page);
  }

  render(){ 
    return (
      <React.Fragment>
        <div className="App">
          hello world
          <br/>
          {/* <button onClick={()=>this.clickHere()}>button</button> */}
        </div>
        <div>
          <JavaPage 
            clickHere={this.clickHere}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
