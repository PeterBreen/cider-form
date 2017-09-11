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
    rating: {type: "string", title: "Rating", enum: ['1', '2', '3'], enumNames: ["one", "two", "three"], default: "1"},
    notes: {type: "string", title: "Tasting Notes", default: ""},
    taster: {type: "string", title: "Taster", enum: ["Both", "Peter"], default: "Both"},
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
const onSubmit = ({formData}) => appendDom(formData);

const appendDom = function(formData) {
  let stringData = JSON.stringify(formData, null, 4); // adds 4 spaces to pretty-print output
  //probably overcomplicated method of returning <div><pre> content </pre></div> and appending to dom
  let target = document.getElementById('results');
  let outputdiv = document.createElement('div');
  let outputpre = document.createElement('pre');
  outputdiv.appendChild(outputpre);
  let outputtext = document.createTextNode(stringData);
  outputpre.appendChild(outputtext);
  target.appendChild(outputdiv);
  // debug console.log
  console.log(stringData);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form schema={schema}
              uiSchema={uiSchema}
              onSubmit={onSubmit}
              onError={log("errors")} />
      </div>
    );
  }
}

export default App;
