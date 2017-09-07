import React, { Component } from 'react';
import './App.css';
import Form from "react-jsonschema-form";

//define schema
const schema = {
  title: "Cider Rating Form",
  type: "object",
  required: [],
  properties: {
    brand: {type: "string", title: "Brand", default: ""},
    cider: {type: "string", title: "Cider Name", default: ""},
    rating: {type: "number", title: "Rating", enum: [1, 2, 3], enumNames: ["one", "two", "three"]},
    notes: {type: "string", title: "Tasting Notes", default: ""},
    taster: {type: "string", title: "Taster", enum: ["Both", "Peter"]},
  }
};

//define uiSchema (determine what type of input is rendered, e.g. radio, textarea)
const uiSchema = {
  "rating": {
    "ui:widget": "radio"
  },
  "notes": {
    "ui:widget": "textarea"
  },
  "taster": {
    "ui:widget": "radio"
  }
};

//log function
const log = (type) => console.log.bind(console, type);

//submit function
const appendData = function() {
  console.log('appendData() called');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form schema={schema}
              uiSchema={uiSchema}
              onChange={log("changed")}
              onSubmit={appendData}
              onError={log("errors")} />
            <div id="results"></div>
      </div>
    );
  }
}

export default App;
