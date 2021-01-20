import React from 'react';
import ProductComponent from '../../components/main/ProductComponent';

interface Props{
}
class ProductContainer extends React.Component<Props>{
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
          <ProductComponent 
            pageMove={this.pageMove}
          />
      </React.Fragment>
    );
  }
}

export default ProductContainer;
