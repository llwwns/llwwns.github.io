import React, { Component } from 'react'
import  'mermaid/dist/mermaidAPI.min'
import  'mermaid/dist/mermaid.css'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/ambiance.css'
const mermaidAPI = window.mermaidAPI
import { css } from 'glamor'

const mermaidStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

class Mermaid extends Component {
  constructor() {
    super()
    this.state = {
      html:''
    }
    mermaidAPI.initialize({
      logLevel: 5
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.graph !== this.props.graph) {
      try{
        mermaidAPI.render('mermaid', nextProps.graph, html => this.setState({html}), this._div)
      } catch(err) {
        this.setState({html: err.message})
      }
    }
  }

  render () {
    return (
      <div>
        <div className='mermaid' {...mermaidStyle} dangerouslySetInnerHTML={{__html: this.state.html}} ref={div => this._div = div}></div>
        <div style={{display:'none'}} />
      </div>
    )
  }
}

class Page extends Component {
  constructor() {
    super()
    this.state = {
      code: "",
      graph: ""
    }
    this.options = {
      lineNumbers: true,
      theme: 'ambiance',
      tabSize: '2'
    }
    this.handleChange = this.handleChange.bind(this)
    this.setGraph = _.debounce(this.setGraph.bind(this), 600)
  }

  handleChange(value) {
    this.setState({code: value, graph: this.state.graph})
    this.setGraph()
  }

  setGraph() {
    const {code} = this.state
    this.setState({
      code: code,
      graph: code
    })
  }

  render() {
    return (
      <div>
        <CodeMirror value={this.state.code} onChange={this.handleChange} options={this.options} />
        <Mermaid name='graph' graph={this.state.graph} />
      </div>
    )
  }
}

export default Page
