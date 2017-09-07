import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "react-jsonschema-form";

//define schema
const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};
//log function
const log = (type) => console.log.bind(console, type);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form schema={schema}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")} />
      </div>
    );
  }
}

export default App;
