// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onCoin = () => {
    const {heads, tails} = this.state

    const tossResult = Math.floor(Math.random() * 2)
    const result =
      tossResult >= 1
        ? this.setState(prevState => ({tails: prevState.tails + 1}))
        : this.setState(prevState => ({heads: prevState.heads + 1}))
    console.log(tossResult)

    const imgUrl =
      tossResult >= 1
        ? this.setState({
            imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
          })
        : this.setState({
            imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
          })
  }

  render() {
    const {heads, tails, imgUrl} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <div className="button-container">
            <h1 className="toss">Coin Toss Game</h1>
            <p className="para">Heads (or) Tails</p>
            <img className="img" src={imgUrl} alt="toss result" />
            <button className="btn" type="button" onClick={this.onCoin}>
              Toss Coin
            </button>
          </div>
          <div className="toss-container">
            <p className="heading"> Total: {heads + tails}</p>
            <p className="heading">Heads: {heads}</p>
            <p className="heading">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
