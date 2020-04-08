import React, { Component } from 'react'
import { ChatView } from './screens/chat/index'

export default class HelloWorldApp extends Component {
  render() {
    return <ChatView messages={[]}></ChatView>
  }
}
