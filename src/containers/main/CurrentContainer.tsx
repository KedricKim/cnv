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
    this._getHello();
  }

  _getHello = async() => {
    console.log(Config.default.DB_BASE_URL)
    console.log(process.env.REACT_APP_API_BASE_URL)
    console.log(`REACT_APP_API_BASE_URL = ${process.env.REACT_APP_API_BASE_URL}`);
    Axios.get('http://localhost:8000/list/product', {
      // title: movieContent.title,
      // content: movieContent.title
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
