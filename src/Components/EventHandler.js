import React, { Component } from 'react';
import './FunctionClick.css';

class EventHandler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Zumba fitness"
        }
    }

    clickHandler = () => {
        this.setState({
            message: "Salade mes lukums"
        });
        console.log(this);
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler} className="glow-on-hover" >Click</button>
                <div>{this.state.message}</div>
            </div>
        );
    }
}


export default EventHandler;