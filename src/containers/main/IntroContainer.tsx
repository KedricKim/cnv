import React from 'react';
import IntroComponent from '../../components/main/IntroComponent';
import $ from "jquery"; 

interface Props{
  // clickHere : (page:string)=>void;
}
class IntroContainer extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={

    }
  }

//   clickHere = (page:String) =>{
//     console.log(page);
//   }

  render(){ 
    return (
      <React.Fragment>
          <IntroComponent 
            // clickHere={this.clickHere}
          />
      </React.Fragment>
    );
  }
}

export default IntroContainer;
