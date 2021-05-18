import React, { Component } from "react";
import "./index.css";
import Messages from "./Messages";
import Input from "./Input";

class Chat extends Component {
  state = {
    messages: [],
    member: {
      username: "hola",
      color: "#" + Math.floor(Math.random() * 0xffffff).toString(16),
    },
  };

  onSendMessage = (message) => {
    this.state.messages.push({ member: "hola2", text: message });
  };

  render() {
    return (
      <div className="Chat">
        <div className="Chat-header">
          <h1>Chat</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default Chat;
