import React from 'react';
import MainComponent from '../components/MainComponent';
import $ from "jquery"; 
interface Props{
  // clickHere : (page:string)=>void;
}
class MainContainer extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    var jbOffset : any = $( '.wrap_top' ).offset();
    $( window ).scroll( function() {
      let document : any = $(this).scrollTop();
        if ( document > jbOffset.top ) {
            $( '.wrap_top' ).addClass( 'topFixed' );
        }
        else {
            $( '.wrap_top' ).removeClass( 'topFixed' );
        }
    });
  }

  clickHere = (page:String) =>{
    console.log(page);
  }

  render(){ 
    return (
      <React.Fragment>
        {/* <div className="App">
          hello world
          <br/>
          <button onClick={()=>this.clickHere('키키키')}>button</button>
        </div>
        <div> */}
          <MainComponent 
            clickHere={this.clickHere}
          />
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default MainContainer;
