import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isShowingForm: true,
      form: {
        sourceURL: "",
        salutation: "",
        company: "",
        positionTitle: "",
        positionType: "",
        rails: false,
        javascript: false,
        react: false,
        redux: false,
        css: false,
        postgreSQL: false,
        restfulAPI: false,
        isAngelListPost: false,
        specificCompanyNote: ""
      }
    }
  }

    onFormUpdates = (event) => {
      let target = event.target
      let value = target.type == "checkbox" ? target.checked : target.value
      let name = target.name
      let stateUpdate = Object.assign({},
        this.state.form, {
          [name]: value
        }
      )
      this.setState({
        form: stateUpdate
      }, console.log(this.state.form))
    }

    render() {
      return (
        <div className="App">
          <Form form={this.state.form} onFormUpdates = {this.onFormUpdates} />
        </div>
      );
    }
  }

  export default App;
