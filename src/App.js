import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    state = {
      isFormValid: false,
    };

    handleSubmit = (value) => {
      this.setState({ isFormValid: value });
    }

    render() {
        const { isFormValid } = this.state;

        return (<div>
            <Form onSubmit={this.handleSubmit}></Form>
            <Message>{isFormValid ? 'Form is Valid' : 'Form is Incomplete!'}</Message>
        </div>);
    }
}

export default App;
