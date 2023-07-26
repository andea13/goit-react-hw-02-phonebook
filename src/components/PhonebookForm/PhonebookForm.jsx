import React, { Component } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './PhonebookForm.styled';

class PhonebookForm extends Component {
  state = {
    contactName: '',
    number: '',
  };

  handleChange = event => {
    console.log(event.target.value);
    const { contactName, value } = event.target;

    this.setState({
      [contactName]: value,
    });
  };

  handleSubmit = event => {
    const { contactName, number } = this.state;
    event.preventDefault();

    if (!contactName.trim() || !number.trim()) {
      alert('Please fill in all the fields');
      return;
    }

    this.props.onSubmit({
      contactName: contactName.trim(),
      number: number.trim(),
    });

    this.reset();
  };

  reset = () => {
    this.setState({
      contactName: '',
      number: '',
    });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { contactName, number } = this.state;
    return (
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            value={contactName}
            onChange={handleChange}
            type="text"
            name="contact"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}

export default PhonebookForm;
