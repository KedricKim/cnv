import React from 'react';
import MainComponent from '../components/MainComponent';
import $ from "jquery"; 
interface Props {
  // clickHere : (page:string)=>void;
}
class MainContainer extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
  }

  // clickHere = (page:string) =>{
  //   document.location.href = page;
  // }

  render(){ 
    return (
      <React.Fragment>
          <MainComponent 
            // clickHere={this.clickHere}
          />
      </React.Fragment>
    );
  }
}

export default MainContainer;
