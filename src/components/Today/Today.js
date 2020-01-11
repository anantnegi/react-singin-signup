import React, { Component } from 'react';
import './Today.css'
import axios from 'axios'


const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

class Today extends Component {
        // Adds a class constructor that assigns the initial state values:
        constructor () {
            super();
            this.state = {
                btcprice: '',
                ltcprice: '',
                ethprice: ''
            };
        }
        // This is called when an instance of a component is being created and inserted into the DOM.
        componentWillMount () {

            if(isLocalhost) {
                this.setState({ btcprice: localStorage.getItem('btcprice') });
                this.setState({ ethprice: localStorage.getItem('ethprice') });                
                this.setState({ ltcprice: localStorage.getItem('ltcprice') });
                // localStorage.setItem('btcprice', JSON.stringify(response.data.BTC.USD));
                // localStorage.setItem('ethprice', JSON.stringify(response.data.LTC.USD));
                // localStorage.setItem('ltcprice', JSON.stringify(response.data.ETH.USD));                
            } else {
                axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
                .then(response => {
                    // We set the latest prices in the state to the prices gotten from Cryptocurrency.
                    this.setState({ btcprice: response.data.BTC.USD });
                    this.setState({ ethprice: response.data.ETH.USD });
                    this.setState({ ltcprice: response.data.LTC.USD });                           
                })
                // Catch any error here
                .catch(error => {
                    console.log(error)
                })
            }            
        }
        // The render method contains the JSX code which will be compiled to HTML.
        render() {
            return (
                <div className="today--section container">
                    <h2>Current Price</h2>
                    <div className="columns today--section__box">
                        <div className="column btc--section">
                            <h5>${this.state.btcprice}</h5>
                            <p>1 BTC</p>
                        </div>
                        <div className="column eth--section">
                            <h5>${this.state.ethprice}</h5>
                            <p>1 ETH</p>
                        </div>
                        <div className="column ltc--section">
                            <h5>${this.state.ltcprice}</h5>
                            <p>1 LTC</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    export default Today;
