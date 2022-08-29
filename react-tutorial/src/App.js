import React, { Component } from "react";
import { heading, heading2, heading3 } from "./someExample";
import Table from "./Table";
import { TableHeader, TableBody } from "./simpleComponents";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
        {heading}
        {heading2}
        {heading3}
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    );
  }
}

export default App;
