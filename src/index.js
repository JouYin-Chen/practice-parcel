import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './Main/App'
import Second from './Second/App'

const render = () => {

  class Root extends Component {
    render() {
      return (
        <BrowserRouter>
          <div >
            <Route exact path="/" component={Main} />
            <Route path="/Second" component={Second} />
          </div>
        </BrowserRouter>
      )
    }
  }

  ReactDOM.render(<Root />, document.getElementById('root'))
}
render()
