import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Layout from 'Layout'
import Qrcode from 'Qrcode'
import Mermaid from 'Mermaid'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/qrcode' component={Qrcode} />
            <Route path='/mermaid' component={Mermaid} />
            <Route path='/about' component={About} />
          </div>
        </Layout>
      </Router>
    )
  }
}

const Home = () => (
  <div>Home</div>
)

const About = () => (
  <div>About</div>
)

export default App
