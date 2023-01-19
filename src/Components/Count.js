import React from "react";
import { Component } from "react";

class Count extends Component {
    
        constructor() {
            super()
            this.state = {
                count: 0
            }
        }
    
        increment() {
            this.setState({
                count: this.state.count + 1
            }, () => {
                console.log("Callback value: ", this.state.count)
            })
        }
    
        render() {
            return (
                <div>
                    <h1>Count: {this.state.count}</h1>
                    <button onClick={() => this.increment()}>Increment</button>
                </div>
            )
        }
}

export default Count;
