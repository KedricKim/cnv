import React from 'react';
import CatalogComponent from '../../components/main/CatalogComponent';
import $ from "jquery"; 

interface Props{
  // clickHere : (page:string)=>void;
}
class CatalogContainer extends React.Component<Props>{
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
          <CatalogComponent 
            // clickHere={this.clickHere}
          />
      </React.Fragment>
    );
  }
}

export default CatalogContainer;
