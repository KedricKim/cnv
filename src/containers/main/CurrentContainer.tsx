import React from 'react';
import CurrentComponent from '../../components/main/CurrentComponent';
import Axios from 'axios';
import * as Config from '../../config/config';

interface Props{
}
class CurrentContainer extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={
      hello : [],
    }
  }
 
  pageMove = (page:string) =>{
    document.location.href = page;
  }
  componentDidMount() {
    this._getProduct();
  }

  _getProduct = async() => {
    Axios.get('/api/product', {
    }).then((res)=>{
      console.log(res)
    })
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
