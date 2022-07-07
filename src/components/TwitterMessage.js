import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      userInput: "",
      charCount: props.maxChars,
    };
  }

  handleMessage = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={(event) => this.handleMessage(event)}
          type="text"
          name="message"
          id="message"
          value={this.state.userInput}
        />
        <p>
          Message Length: {this.props.maxChars - this.state.userInput.length}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
