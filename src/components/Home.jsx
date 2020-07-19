import React, { Component } from "react";
import { shallow, mount, render } from "enzyme";
class Home extends Component {
    render(){
        return (
            <h1>
                Hello from Home!
            </h1>
        )
    }
}

export default Home;