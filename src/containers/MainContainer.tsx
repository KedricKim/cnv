import React from 'react';
import MainComponent from '../components/MainComponent';
interface Props {
}
class MainContainer extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={

    }
  }
  render(){ 
    return (
      <React.Fragment>
          <MainComponent 
          />
      </React.Fragment>
    );
  }
}

export default MainContainer;
