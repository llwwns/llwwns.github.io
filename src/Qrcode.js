import React, { Component } from 'react'
import QRCode from 'qrcode.react'
import { Input } from 'semantic-ui-react'
import glamorous from 'glamorous'
const Div = glamorous.Div
import _ from 'lodash'

class Qrcode extends Component {
  constructor() {
    super()
    this.state = {
      text:"",
      qrcode:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.setState = this.setState.bind(this)
    this.setQrcode = _.debounce(this.setQrcode.bind(this), 100)
  }

  setQrcode() {
    const {text} = this.state
    this.setState({
      text: text,
      qrcode: text
    })
  }
  
  handleChange({target:{value}}) {
    this.setState({
      text: value,
      qrcode: this.state.qrcode
    })
    this.setQrcode()
  }

  render() {
    return (
      <Div display='flex' flexDirection='column' alignItems='center'>
        <Input focus type="text" value={this.state.text} onChange={this.handleChange} style={{width:'100%', maxWidth: '760px'}} />
        <Div marginTop='30px'>
          <QRCode size={256} value={this.state.qrcode} stype={{width:'100%', height:'100%'}} />
        </Div>
      </Div>
    )
  }
}

export default Qrcode
