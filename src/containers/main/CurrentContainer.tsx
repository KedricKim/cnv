import React from 'react';
import CurrentComponent from '../../components/main/CurrentComponent';

interface Props{
}
class CurrentContainer extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={

    }
  }

  pageMove = (page:string) =>{
    document.location.href = page;
  }

  render(){ 
    return (
      <React.Fragment>
          <CurrentComponent 
            pageMove={this.pageMove}
          />
      </React.Fragment>
    );
  }
}

export default CurrentContainer;
