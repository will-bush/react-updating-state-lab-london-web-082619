// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        let count = this.state.timesClicked
        this.setState({
            timesClicked: count+1
        })
    }

    render() {

        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker;