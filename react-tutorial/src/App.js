import React, { Component } from "react";
import { heading, heading2, heading3 } from "./someExample";
import Table from "./Table";
import { TableHeader, TableBody } from "./simpleComponents";
import Form from "./form";
import {Example,FavoriteColor }from "./useState";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
        {heading}
        {heading3}
        <table>
          <TableHeader header="abc" />
          <TableBody />
        </table>
        <Form/>
        <Example/>
        <FavoriteColor/>
      </div>
    );
  }
}

export default App;
