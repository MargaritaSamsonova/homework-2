import React from 'react';
import Message from '../Message';
import './Chat.css';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageInput: ''
        };
        this.changeInputMessage = this.changeInputMessage.bind(this);
        this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
    }

    changeInputMessage(event) {
        this.setState({
            messageInput: event.target.value
        })
    }

    sendMessageOnEnter(event) {
        if (event.key === 'Enter') {
            this.setState({
                messages: [...this.state.messages, {text: this.state.messageInput}],
                messageInput: ''
            })
        }
    }

    render() {
        return (
            <div className='chat'>
                <div className='message-list'>
                    <div className="messages">
                        {this.state.messages.map((message, i) => (
                            <Message key={i} text={message.text}/>
                        ))}
                    </div>
                </div>
                <input type="text"
                       value={this.state.messageInput}
                       className="input-message"
                       onChange={this.changeInputMessage}
                       onKeyPress={this.sendMessageOnEnter}
                />
            </div>
        )
    }
}
