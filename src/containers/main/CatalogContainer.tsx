import React from 'react';
import CatalogComponent from '../../components/main/CatalogComponent';

interface Props{
}
class CatalogContainer extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={

    }
  }


  render(){ 
    return (
      <React.Fragment>
          <CatalogComponent 
          />
      </React.Fragment>
    );
  }
}

export default CatalogContainer;
