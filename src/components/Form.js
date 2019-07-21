import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import { capitalizeFirstLetter } from '../utils/string';

const fieldsRegex = {
  name: /^[a-zA-Z ]{4,30}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[2-9]\d{9}$/,
  url: /^(ftp|http|https):\/\/[^ "]+$/,
}

class Form extends Component {
    static propTypes = {
      onSubmit: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            url: '',
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };

    }

    handleChange = ({ target }) => {
      const { name, value } = target;
      const fieldName = `is${capitalizeFirstLetter(name)}Valid`;
      const isValid = fieldsRegex[name].test(value);
      this.setState({ [fieldName]: isValid, [name]: value });
    }

    handleSubmit = () => {
      const { onSubmit } = this.props;
      const { isNameValid, isEmailValid, isPhoneValid, isUrlValid } = this.state;

      const isFormValid = isNameValid && isEmailValid && isPhoneValid && isUrlValid;

      if (onSubmit) {
        onSubmit(isFormValid);
      }

      return isFormValid;
    }

    render() {
        const { name, email, phone, url } = this.state;

        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                <input type="text" className="name" name="name" onChange={this.handleChange} value={name} />
                <h3>Email:
                </h3>
                <input type="text" className="email" name="email" onChange={this.handleChange} value={email} />
                <h3>Phone:
                </h3>
                <input type="number" className="phone" name="phone" onChange={this.handleChange} value={phone} />
                <h3>Blog URL:
                </h3>
                <input type="text" className="url" name="url" onChange={this.handleChange} value={url} />
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={this.handleSubmit}>Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
