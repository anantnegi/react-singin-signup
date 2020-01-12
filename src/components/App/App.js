// Import React and Component
    import React, { Component } from 'react';
    // Import CSS from App.css
    import '../../assets/css/App.css';
    // Import the Today component to be used below
    import Today from '../Today/Today'
    // Import the History component to be used below
    import History from '../History/History'
    import { Router, Route, Switch } from "react-router-dom"
    import { createBrowserHistory } from "history"
    import { Container } from '@material-ui/core'
    import Header from '../Header/Header'
    import Signup from '../Signup/Signup'
    import Signin from '../Signin/Signin'
    import Homepage from '../Homepage/Homepage'
    import http from '../../Lib/axios.js'

    let hist = createBrowserHistory();
    
    class App extends Component {
      
      state = {
        categories: []
      } 

      componentDidMount() {
        http.get('api/ces/category')
        .then(res => {          
          this.setState({ categories: res.data.results });          
        })
      }

      render() {
        return (          
          <div>             
             <Header Categories={this.state.categories} />              
             <Router history={hist}>
              <Switch>
                <Route path="/today" component={Today} />
                <Route path="/history" component={History} />              
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/" render={(props) => <Homepage {...props} Categories={this.state.categories} />} />
              </Switch>
            </Router> 
          </div>
        );
      }
    }

    export default App;