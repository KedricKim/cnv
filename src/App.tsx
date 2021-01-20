import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { Header,Footer, Main,Intro,Catalog,OnlineHelp,Product,Current,Velocity } from './pages/PageIndex';
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

              {/* 회사 소개 */}
              <Route path="/menu/intro" component={Intro} />
              {/* 카탈로그 */}
              <Route path="/menu/catalog" component={Catalog} />
              {/* 온라인 견적 */}
              <Route path="/menu/onlineHelp" component={OnlineHelp} />
              {/* 제품 소개 */}
              <Route path="/menu/product" component={Product} />

              {/* 유속계 */}
              <Route path="/menu/current" component={Current} />
              {/* 파고계 */}
              <Route path="/menu/velocity" component={Velocity} />

              
          </Switch>

          {/* 푸터 */}
          <Footer/>

      </React.Fragment>
    );
  }
}

export default App;
