import React from 'react';
import VelocityComponent from '../../components/main/VelocityComponent';

interface Props{
}
class VelocityContainer extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={

    }
  }


  render(){ 
    return (
      <React.Fragment>
          <VelocityComponent 
          />
      </React.Fragment>
    );
  }
}

export default VelocityContainer;
