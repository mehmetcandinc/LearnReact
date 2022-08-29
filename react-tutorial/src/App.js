import React, { Component } from "react";
import { heading,heading2,heading3 } from "./someExample";
import Table from './Table'

class App extends Component {
    render() {
        return(
            <div className="container">
                <Table />
                {heading}
                {heading2}
                {heading3}
            </div>
        )
    }
}

export default App