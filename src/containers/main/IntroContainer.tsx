import React from 'react';
import IntroComponent from '../../components/main/IntroComponent';

interface Props{
}
class IntroContainer extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={

    }
  }


  render(){ 
    return (
      <React.Fragment>
          <IntroComponent 
          />
      </React.Fragment>
    );
  }
}

export default IntroContainer;
