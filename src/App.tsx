import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { Header,Footer, Main,Intro, } from './pages/PageIndex';
import './style/style.css';
import $ from "jquery"; 

class App extends React.Component{

  componentDidMount(){
    this.setFixedTop();
  }

  // 헤더고정
  setFixedTop(){
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

  render(){ 
    return (
      <React.Fragment>

          {/* 헤더 */}
          <Header/>

          {/* 네비 */}
          <Switch>
              {/* 메인 */}
              <Route path="/" exact component={Main} />

              {/* 회사소개 */}
              <Route path="/menu/intro" component={Intro} />
          </Switch>

          {/* 푸터 */}
          <Footer/>

      </React.Fragment>
    );
  }
}

export default App;
