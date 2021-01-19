import React from 'react';
import HeaderComponent from '../../components/common/HeaderComponent';

interface Props{
  // clickHere : (page:string)=>void;
}
class HeaderContainer extends React.Component<Props>{
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
          <HeaderComponent 
            pageMove={this.pageMove}
          />
      </React.Fragment>
    );
  }
}

export default HeaderContainer;
