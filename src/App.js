// 지금까지 정의한 모든 컴포넌트 임포트
import React from "react";
import CardContainer from "./ProductCards";
import Nav from "./Navigation";
import {SignInModalWindow, BuyModalWindow} from "./modalwindows";
import About from "./About";
import Orders from ".orders";
// react-router-dom 패키지에서 필요한 컴포넌트 임포트
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user : {
        loggedin: false,
        name: ""
      }
    };
    this.showSignInModalWindow = this.showSignInModalWindow.bind(this);
    this.showBuyModalWindow = this.showBuyModalWindow.bind(this);
    this.toggleSignInModalWindow = this.toggleSignInModalWindow.bind(this);
    this.toggleBuyModalWindow = this.toggleBuyModalWindow.bind(this);
  }

  showSignInModalWindow(){
    const state = this.state;
    const newState = Object.assign({},state,{showSignInModal:true});
    this.setState(newState);
  }
  showBuyModalWindow(id,price){
    const state = this.state;
    const newState = Object.assign({},state,{showBuyModalWindow:true,productid:id,price:price});
    this.setState(newState);
  }

  toggleSignInModalWindow() {
    const state = this.state;
    const newState = Object.assign({},state,{showSignInModal:!state.showSignInModal});
    this.setState(newState);
  }
  toggleBuyModalWindow(){
    const state = this.state;
    const newState = Object.assign({},state,{showBuyModal:!state.showBuyModal});
    this.setState(newState); 
  }


  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav user={this.state.user} showModalWindow={this.showSignInModalWindow}/>
            <div className='container pt-4 mt-4'>
              <Route exact path="/" render={() => <CardContainer location='cards.json' showBuyModal={this.showBuyModalWindow} />} />
              <Route path="/promos" render={() => <CardContainer location='promos.json' promo={true} showBuyModal={this.showBuyModalWindow}/>} />
              {this.state.user.loggedin ? <Route path="/myorders" render={()=><Orders location='user.json'/>}/> : null}
              <Route path="/about" component={About} />
            </div>
            <SignInModalWindow showModal={this.state.showSignInModal} toggle={this.toggleSignInModalWindow}/>
            <BuyModalWindow showModal={this.state.showBuyModal} toggle={this.toggleBuyModalWindow} user={this.state.user.ID} productid={this.state.productid} price={this.state.price}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;